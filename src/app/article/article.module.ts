import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ArticleListComponent } from './article-list/article-list.component'
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleService } from './shared/article.service'
import { ArticleComponent } from './article.component';
import { FormsModule }   from '@angular/forms';

const routes: Routes = [
  { 
    path: 'article', component: ArticleComponent,
    children: [
      { path: '', component: ArticleListComponent },
      { path: ':id', component: ArticleDetailComponent }
    ]
  },
  { path: 'article-form', component: ArticleFormComponent }
]

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleFormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: []
})
export class ArticleModule { }