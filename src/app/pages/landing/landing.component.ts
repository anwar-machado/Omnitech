import { Component, OnInit, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { SelectModule } from 'primeng/select';
import { I18nService } from '../../services/i18n.service';
import { trigger, transition, style, animate } from '@angular/animations';

const fadeSlide = trigger('fadeSlide', [
  transition('* <=> *', [
    style({ opacity: 0, transform: 'translateY(8px)' }),
    animate('320ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ButtonModule, RippleModule, StyleClassModule, DividerModule, SelectModule],
  templateUrl: './landing.component.html',
  animations: [fadeSlide],
})
export class LandingComponent implements OnInit {
  private i18n = inject(I18nService);

  readonly t = this.i18n.t;
  readonly lang = this.i18n.lang;

  isDarkMode = false;
  currentYear = new Date().getFullYear();

  // Computed feature items from i18n
  readonly features = computed(() => this.t().features.items);
  readonly portfolioItems = computed(() => this.t().portfolio.items);
  readonly portfolioTabs = computed(() => this.t().portfolio.tabs);

  // Portfolio active tab (0 = Todos/All)
  activePortfolioTab = signal(0);

  readonly filteredPortfolio = computed(() => {
    const tab = this.activePortfolioTab();
    const items = this.portfolioItems();
    const tabs = this.portfolioTabs();
    if (tab === 0) return items;
    return items.filter(p => p.type === tabs[tab]);
  });

  // Contact form state
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  formStatus: 'idle' | 'sending' | 'sent' = 'idle';

  // Browser mockup mini-services
  readonly mockServices = [
    { icon: 'pi pi-shopping-cart', label: 'E-commerce' },
    { icon: 'pi pi-code', label: 'Sistema' },
    { icon: 'pi pi-chart-line', label: 'Analytics' },
  ];

  // Social links
  readonly socialLinks = [
    { icon: 'pi pi-linkedin', href: '#' },
    { icon: 'pi pi-instagram', href: '#' },
    { icon: 'pi pi-facebook', href: '#' },
    { icon: 'pi pi-whatsapp', href: '#' },
  ];

  ngOnInit() {
    this.isDarkMode = document.documentElement.classList.contains('app-dark');
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('app-dark', this.isDarkMode);
  }

  toggleLang() {
    this.i18n.toggle();
    this.activePortfolioTab.set(0); // reset tab on lang change
  }

  setPortfolioTab(index: number) {
    this.activePortfolioTab.set(index);
  }

  getPortfolioIcon(type: string): string {
    if (type === 'Sistemas' || type === 'Systems') return 'pi pi-server';
    if (type === 'Mobile') return 'pi pi-mobile';
    return 'pi pi-globe';
  }

  submitContact(event: Event) {
    event.preventDefault();
    this.formStatus = 'sending';
    // Replace with your actual API call / EmailJS / etc.
    setTimeout(() => {
      this.formStatus = 'sent';
    }, 1500);
  }
}
