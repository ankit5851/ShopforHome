import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

import { PaintingComponent } from './painting/painting.component';
import { ShowpiecesComponent } from './showpieces/showpieces.component';
import { StickersComponent } from './stickers/stickers.component';
import { WallshelfComponent } from './wallshelf/wallshelf.component';
import { ClocksComponent } from './clocks/clocks.component';
import { OthersComponent } from './others/others.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'user', component: UserComponent},
  { path: 'user-signin', component: UserSigninComponent},
  { path: 'cart', component: CartComponent},
  { path: 'wishlist', component: WishlistComponent},
  
  { path: 'painting', component: PaintingComponent},
  { path: 'showpieces', component: ShowpiecesComponent},
  { path: 'stickers', component: StickersComponent},
  { path: 'wallshelf', component: WallshelfComponent},
  { path: 'clocks', component: ClocksComponent},
  { path: 'others', component: OthersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
