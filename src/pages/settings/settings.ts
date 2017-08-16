import { Component } from '@angular/core';
import { Toggle } from "ionic-angular";
import { SettingService } from "../../service/settings";

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})

export class SettingsPage {
    constructor(private settingService: SettingService) {

    }

    onToggle(toggle: Toggle) {
        this.settingService.setBackground(toggle.checked);
    }

    checkAltBAckground(){
      return  this.settingService.isAltBackground();
    }

}