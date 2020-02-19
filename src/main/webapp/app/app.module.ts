import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleAngularApplicationSharedModule } from 'app/shared/shared.module';
import { JhipsterSampleAngularApplicationCoreModule } from 'app/core/core.module';
import { JhipsterSampleAngularApplicationAppRoutingModule } from './app-routing.module';
import { JhipsterSampleAngularApplicationHomeModule } from './home/home.module';
import { JhipsterSampleAngularApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleAngularApplicationSharedModule,
    JhipsterSampleAngularApplicationCoreModule,
    JhipsterSampleAngularApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleAngularApplicationEntityModule,
    JhipsterSampleAngularApplicationAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterSampleAngularApplicationAppModule {}
