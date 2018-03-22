/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ElementRef, ViewChild } from '@angular/core';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public data: any = {
        radio1: '2',
        checkbox1: ['1'],
        card: 'weui input error',
        text1: 'text1 message',
        text2: 'text2 message',
        select1: '1',
        select2: '1',
        select3: '1',
        switch2: 'open'
    };



}



