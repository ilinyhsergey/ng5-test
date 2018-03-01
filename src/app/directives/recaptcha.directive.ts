import {AfterViewInit, Directive, ElementRef, forwardRef, Injector, Input, NgZone, OnInit} from '@angular/core';
import {ReCaptchaConfig} from '../components/model/re-captcha-config';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl, Validators} from '@angular/forms';

@Directive({
  selector: '[appRecaptcha]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RecaptchaDirective),
      multi: true
    }
  ]
})
export class RecaptchaDirective implements OnInit, ControlValueAccessor, AfterViewInit {

  @Input() key: string;
  @Input() config: ReCaptchaConfig = {};
  @Input() lang: string;

  private control: FormControl;

  private onChange: (value: string) => void;
  private onTouched: (value: string) => void;

  private widgetId: number;

  constructor(private element: ElementRef,
              private ngZone: NgZone,
              private injector: Injector) {
  }


  ngOnInit(): void {
    this.registerReCaptchaCallback();
    this.addScript();
  }


  ngAfterViewInit(): void {
    this.control = this.injector.get(NgControl).control;
    this.setValidator();
  }

  private setValidator() {
    this.control.setValidators(Validators.required);
    this.control.updateValueAndValidity();
  }

  addScript() {
    const script = document.createElement('script');
    const lang = this.lang ? '&hl=' + this.lang : '';
    script.src = `https://www.google.com/recaptcha/api.js?onload=reCaptchaLoad&render=explicit${lang}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  registerReCaptchaCallback() {
    window['reCaptchaLoad'] = () => {
      const config = {
        ...this.config,
        'sitekey': this.key,
        'callback': this.onSuccess.bind(this),
        'expired-callback': this.onExpired.bind(this),
        // 'size': 'invisible'
      };
      this.widgetId = this.render(this.element.nativeElement, config);
    };
  }

  private render(element: HTMLElement, config): number {
    return window['grecaptcha'].render(element, config);
  }


  writeValue(obj: any): void {
    // unused
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // unused
  }

  onExpired() {
    this.ngZone.run(() => {
      this.onChange(null);
      this.onTouched(null);
    });
  }

  onSuccess(token: string) {
    this.ngZone.run(() => {
      this.onChange(token);
      this.onTouched(token);
    });
  }
}
