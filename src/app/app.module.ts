import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SocketIoConfig } from 'ngx-socket-io';
import { SocketIoModule } from 'ngx-socket-io/src/socket-io.module';

/// Add the SocketIO Configuration
const config: SocketIoConfig = { url: 'http://10.0.0.79:8988', options: {} };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Import Ionic module
    AppRoutingModule,
    // SocketIoModule.forRoot(config), // Import Socket.io module
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
