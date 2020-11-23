import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { AppRoutingModule } from './app.routing';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { ticketReducer } from './reducer/ticket.reducer';
import { userReducer } from './reducer/user.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [AppComponent, ListComponent, DetailsComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({
            ticket: ticketReducer,
            user: userReducer
        })
    ],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
