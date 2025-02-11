import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-download-pwa',
  templateUrl: './botao-download-pwa.component.html',
  styleUrls: ['./botao-download-pwa.component.css']
})
export class BotaoDownloadPwaComponent implements OnInit {
    // em fase de testes
    installPrompt: any = null;
    hiddenButton: boolean = true

    ngOnInit(): void {
      console.log("iniciando")
      this.initEventInstall()
        // let hidden = JSON.parse(localStorage.getItem('hiddenButton')!)?.hiddenButton
        // this.hiddenButton = hidden
    }

    async initEventInstall(){
        window.addEventListener("beforeinstallprompt", (event)=>{
          console.log(event)
          event.preventDefault();
          this.installPrompt = event;
          this.hiddenButton = false
          // localStorage.setItem("hiddenButton", JSON.stringify({hiddenButton: this.hiddenButton}))
        })
    }

    async installPromptEvent(){
      console.log("Estou no installPromptEvent " + this.installPrompt)
        if (!this.installPrompt) return 
        const result = await this.installPrompt.prompt()
        console.log(`resultado da escolha do prompt ${result.outcome}`)
        this.disableInAppInstallPrompt();
    }

    appInstalled(){
        window.addEventListener("appinstalled", () => {
            this.disableInAppInstallPrompt();
      });
    }
    

    disableInAppInstallPrompt() {
      this.installPrompt = null;
      this.hiddenButton = true;
    }
}
