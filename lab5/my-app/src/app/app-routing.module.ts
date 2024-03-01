import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

const routes: Routes = [
    {path: '', redirectTo: '/categories', pathMatch: 'full'},
    {path: 'categories', component: ProductListComponent},
    {path: 'categories/:categoryId', component: ProductListComponent},
    {path: 'categories/:categoryId/products/:productId', component: ProductDetailsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { };