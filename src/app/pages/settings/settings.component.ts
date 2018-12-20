import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { UserSettingsService } from '../../services/user-settings-service/user-settings.service';
// import { AngularFireUploadTask } from '@angular/fire/storage';
import { User } from '../../interfaces/user';

// import { AngularFireStorage } from 'angularfire2/storage';
import {Observable,of, from } from 'rxjs';
import { take, finalize } from 'rxjs/operators';

// import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  settings: FormGroup;
  user: User;
  loading: boolean = false;
  logoUrl: any = null;
  urlImage: any = "";
  uploadUrl: string;
  uploadTask: AngularFireUploadTask;
  uploadLoading: boolean = false;
  exist: boolean = false;
  id: string;
  changeSuccess: boolean = false;
  uploadFailed: string;

  srcData : SafeResourceUrl;

  constructor(
    private fb: FormBuilder,
    private settingsService: UserSettingsService, 
    private sanitizer: DomSanitizer, 
    private afStorage: AngularFireStorage,
    ) {

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

  upload(event) {
    const file = event.target.files[0];
    // this.afStorage.upload('/upload/', file); 

    // const randomId = Math.random().toString(36).substring(2);
    // this.ref = this.afStorage.ref(randomId);
    // this.task = this.ref.put(event.target.files[0]); 

    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref('/companies/' + id);
    this.task = this.ref.put(file);
    this.uploadProgress = this.task.percentageChanges();

    this.changeSuccess = false;
    this.uploadFailed = '';

    if (!file) {
      return;
    }

    if (file.size > 1048576) {
      this.uploadFailed = 'size';
      return;
    }

    if (file.type != 'image/png' && file.type != 'image/jpg' && file.type != 'image/jpeg' && file.type != 'image/svg+xml') {
      this.uploadFailed = 'type';
      return;
    }

    var _url = window.URL;
    var logo = new Image();

    logo.onload = (e:any) => {
      var w = e.path[0].width;
      var h = e.path[0].height;

      this.task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = this.ref.getDownloadURL();
          this.logoUrl = this.ref.getDownloadURL();
          this.uploadLoading = false;
          localStorage.setItem("url_logo", JSON.parse(this.logoUrl));
        })
        )
      .subscribe()
      };
      logo.src = _url.createObjectURL(file);
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

    // uploadLogo(e) {
    //   const file = e.target.files[0];
    //   // this.afStorage.upload('/upload/', file); 

    //   // const randomId = Math.random().toString(36).substring(2);
    //   // this.ref = this.afStorage.ref(randomId);
    //   // this.task = this.ref.put(event.target.files[0]); 

    //   const id = Math.random().toString(36).substring(2);
    //   console.log(id);
    //   const ref = this.afStorage.ref(`/companies/${id}`);
    //   const task = ref.put(file);
    //   console.log(task);

    //   this.changeSuccess = false;
    //   this.uploadFailed = '';

    //   if (!file) {
    //     return;
    //   }

    //   if (file.size > 1048576) {
    //     this.uploadFailed = 'size';
    //     return;
    //   }

    //   if (file.type != 'image/png' && file.type != 'image/jpg' && file.type != 'image/jpeg' && file.type != 'image/svg+xml') {
    //     this.uploadFailed = 'type';
    //     return;
    //   }

    //   var reader = new FileReader();

    //   reader.readAsDataURL(file); // read file as data url

    //   reader.onload = (event) => { // called once readAsDataURL is completed
    //     let _data: any = event.target;
    //     this.logoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(_data.result) ? this.sanitizer.bypassSecurityTrustResourceUrl(_data.result) : '/assets/images/logo.svg';
    //     console.log(this.logoUrl);
    //   }

    //   var _url = window.URL;
    //   var logo = new Image();

    //   logo.onload = (e:any) => {
    //     var w = e.path[0].width;
    //     var h = e.path[0].height;

    //     // if(w != 60 && w != 150 && h != 60){
    //       //   this.uploadFailed = 'image_size';
    //       //   return;
    //       // }

    //       this.uploadTask = this.settingsService.saveLogo(file);
    //       // this.uploadLoading = true;

    //       // console.log(this.uploadTask.task);
    //       let _data_task:any = this.uploadTask.task;
    //       console.log(_data_task);
    //       this.uploadTask.then(res => {
    //         console.log("123123");
    //         if (res.state == 'success') {
    //           this.uploadUrl = res.ref.name;
    //           this.save();
    //           res.ref.getDownloadURL().then(res => {
    //             this.logoUrl = res.i || res || null;
    //           });
    //           this.uploadLoading = false;
    //         }
    //       }).catch(err => {
    //         console.log("111111111111111111111");
    //         this.uploadLoading = false;
    //         this.uploadFailed = 'invalid';
    //       });
    //     };

    //     logo.src = _url.createObjectURL(file);

    //   }

    }
