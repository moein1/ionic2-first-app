export class SettingService {
    private altBackground: boolean = false;
    setBackground(isAlt :boolean ) {
        this.altBackground = !this.altBackground;
    }

    isAltBackground() {
        return this.altBackground;
    }
}