import { Directive, ElementRef, Input, OnInit, Renderer2, OnDestroy } from '@angular/core';

@Directive({
  selector: '[scrollAnimation]',
  standalone: true,
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() animation: string = 'fade-in-up';
  @Input() delay: number = 0;
  @Input() duration: number = 800;
  @Input() once: boolean = true;

  private observer?: IntersectionObserver;
  private hasAnimated = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setInitialStyles();
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && (!this.hasAnimated || !this.once)) {
          setTimeout(() => {
            this.renderer.addClass(this.el.nativeElement, this.animation);
            this.renderer.setStyle(this.el.nativeElement, 'animationDuration', `${this.duration}ms`);
          }, this.delay);
          this.hasAnimated = true;
          if (this.once) this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.2 });

    this.observer.observe(this.el.nativeElement);
  }

  private setInitialStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(20px)');
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
