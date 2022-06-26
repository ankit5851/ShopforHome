import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PaintingComponent } from './painting/painting.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShowpiecesComponent } from './showpieces/showpieces.component';
import { StickersComponent } from './stickers/stickers.component';
import { WallshelfComponent } from './wallshelf/wallshelf.component';
import { ClocksComponent } from './clocks/clocks.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { OthersComponent } from './others/others.component';
import { CartComponent } from './cart/cart.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    PaintingComponent,
    AboutUsComponent,
    ShowpiecesComponent,
    StickersComponent,
    WallshelfComponent,
    ClocksComponent,
    AdminComponent,
    UserComponent,
    OthersComponent,
    CartComponent,
    UserSigninComponent,
    AdminLoginComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
