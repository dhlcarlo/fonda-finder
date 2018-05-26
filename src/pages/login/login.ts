import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth} from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private AuthOf: AngularFireAuth) {
  }

  async login(user:User) {
    try {
      const result = await this.AuthOf.auth.signInWithEmailAndPassword(user.email,user.password);
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }

  register(){
  this.navCtrl.push('RegisterPage')
  }

}
