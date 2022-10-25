import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './modules/expense/form-modal/form-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FriendModalComponent } from './modules/friend/friend-modal/friend-modal.component';
import { GroupComponent } from './modules/friendExpense/group/group.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FriendModalComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
