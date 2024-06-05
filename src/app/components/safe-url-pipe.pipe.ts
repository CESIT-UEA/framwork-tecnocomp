import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * Pipe de sanitização de URL
 */
@Pipe({
  name: 'safeUrlPipe',
})
export class SafeUrlPipePipe implements PipeTransform {
  /**
   * @constructor
   */
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * @method
   * Função de sanitização de URL
   */
  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
