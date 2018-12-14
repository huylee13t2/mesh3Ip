import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { UserSettingsService } from '../../services/user-settings-service/user-settings.service';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: FormGroup;
  user: User;
  loading: boolean = false;
  logoUrl: any = null;
  uploadUrl: string;
  uploadTask: AngularFireUploadTask;
  uploadLoading: boolean = false;
  exist: boolean = false;
  id: string;
  changeSuccess: boolean = false;
  uploadFailed: string;

  constructor(private fb: FormBuilder, private settingsService: UserSettingsService) {

    this.settings = this.fb.group({
      company_name: ['', [Validators.required]],
      company_email: ['', [Validators.required, Validators.email]],
      company_phone: ['', [Validators.required]],
      fees_number: ['', Validators.maxLength(25)],
      lang: ['']
    });


  }

  ngOnInit() {
    this.loading = true;

    this.settingsService._settings.snapshotChanges()
      .map(actions => {
        this.user = null
        this.loading = false;
        this.uploadLoading = false;
        actions.map(a => {

          this.user = a.payload.doc.data() as User;
          this.id = a.payload.doc.id;
          this.settings.patchValue({ ...this.user })
          this.exist = true;
          if (this.user.logo) {
            this.uploadLoading = true;
            this.settingsService.getLogo(this.user.logo).subscribe(logo => {
              this.uploadLoading = false;
              this.logoUrl = logo || null;
            }, () => {
              this.logoUrl = null;
              this.uploadLoading = false;
            })
          }


        });

      }).subscribe();

  }

  save() {
    this.changeSuccess = false;
    var body;

    if (this.exist) {
      body = { ...this.user, ...this.settings.value };
    } else {
      body = { ...this.settings.value };
    }


    if (this.uploadUrl) {
      body.logo = this.uploadUrl;
    }

    this.settingsService.update(this.id, body, this.exist);
    this.changeSuccess = true;
  }

  uploadLogo(e) {
    var file = e.target.files[0];
    this.changeSuccess = false;
    this.uploadFailed = '';

    if (!file) {
      return;
    }

    if (file.size > 1048576) {
      this.uploadFailed = 'size';
      return;
    }

    if (file.type != 'image/png' && file.type != 'image/jpg' && file.type != 'image/jpeg') {
      this.uploadFailed = 'type';
      return;
    }

    var _url = window.URL;
    var logo = new Image();
    logo.onload = (e:any) => {
      var w = e.path[0].width;
      var h = e.path[0].height;
      
      if(w != 60 && w != 150 && h != 60){
        this.uploadFailed = 'image_size';
        return;
      }

      this.uploadTask = this.settingsService.saveLogo(file);
      this.uploadLoading = true;

      this.uploadTask.task.then(res => {
        if (res.state == 'success') {
          this.uploadUrl = res.ref.name;
          this.save();
          res.ref.getDownloadURL().then(res => {
            this.logoUrl = res.i || res || null;
          });
          this.uploadLoading = false;
        }
      }).catch(err => {
        this.uploadLoading = false;
        this.uploadFailed = 'invalid';
      });
    };

    logo.src = _url.createObjectURL(file);

  }

}
