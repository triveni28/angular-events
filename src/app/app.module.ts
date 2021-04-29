import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from'@angular/router';

import{
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator ,
  EventListResolver
}from'./events/index'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import{appRoutes} from'./route'
import{Error404Component} from './errors/404.component'
import { UserModule } from './user/user.module';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component

  ],
  providers:[EventService,
     ToastrService,
     EventRouteActivator,
     AuthService,
     {provide:'canDeactivateCreateEvent',
      useValue:checkDirtyState},
      EventListResolver
    ],
  imports: [
    BrowserModule,
    RouterModule. forRoot(appRoutes),
    UserModule
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  return window.confirm('You have not saved this event, do you really want to cancel?')

  return true
}
