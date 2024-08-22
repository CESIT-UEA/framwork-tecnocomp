'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-bacbc8232ee0bd32371c26826f661f483ee50842b942e2e30babcdb2fa3b992024e4e1157eed9e57e67a0d1c912e69b8d243fea6f1ae5082bb3ddcb8e3563a39"' : 'data-bs-target="#xs-components-links-module-AppModule-bacbc8232ee0bd32371c26826f661f483ee50842b942e2e30babcdb2fa3b992024e4e1157eed9e57e67a0d1c912e69b8d243fea6f1ae5082bb3ddcb8e3563a39"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-bacbc8232ee0bd32371c26826f661f483ee50842b942e2e30babcdb2fa3b992024e4e1157eed9e57e67a0d1c912e69b8d243fea6f1ae5082bb3ddcb8e3563a39"' :
                                            'id="xs-components-links-module-AppModule-bacbc8232ee0bd32371c26826f661f483ee50842b942e2e30babcdb2fa3b992024e4e1157eed9e57e67a0d1c912e69b8d243fea6f1ae5082bb3ddcb8e3563a39"' }>
                                            <li class="link">
                                                <a href="components/AprendizagemEInformaticaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AprendizagemEInformaticaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtividadeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtividadeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtividadeUnidadeBancoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtividadeUnidadeBancoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtividadeUnidadeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtividadeUnidadeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BehaviorismoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BehaviorismoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BotoesSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotoesSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComentariosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComentariosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConstrucionismoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConstrucionismoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConstrutivismoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConstrutivismoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FichaMembrosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FichaMembrosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FichaTecnicaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FichaTecnicaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForumComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForumComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GeralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderAtividadeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderAtividadeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderUnidadeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderUnidadeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComBarraProgressoTesteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComBarraProgressoTesteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReferenciasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferenciasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaibaMaisComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaibaMaisComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SlideComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SlideComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SlideUnidadeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SlideUnidadeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SocioconstrutivismoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SocioconstrutivismoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpanAnimationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpanAnimationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpanAnimationTextoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpanAnimationTextoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopicoForumComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopicoForumComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoSectionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AppModule-bacbc8232ee0bd32371c26826f661f483ee50842b942e2e30babcdb2fa3b992024e4e1157eed9e57e67a0d1c912e69b8d243fea6f1ae5082bb3ddcb8e3563a39"' : 'data-bs-target="#xs-pipes-links-module-AppModule-bacbc8232ee0bd32371c26826f661f483ee50842b942e2e30babcdb2fa3b992024e4e1157eed9e57e67a0d1c912e69b8d243fea6f1ae5082bb3ddcb8e3563a39"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-bacbc8232ee0bd32371c26826f661f483ee50842b942e2e30babcdb2fa3b992024e4e1157eed9e57e67a0d1c912e69b8d243fea6f1ae5082bb3ddcb8e3563a39"' :
                                            'id="xs-pipes-links-module-AppModule-bacbc8232ee0bd32371c26826f661f483ee50842b942e2e30babcdb2fa3b992024e4e1157eed9e57e67a0d1c912e69b8d243fea6f1ae5082bb3ddcb8e3563a39"' }>
                                            <li class="link">
                                                <a href="pipes/SafePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SafeUrlPipePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeUrlPipePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Alternativa.html" data-type="entity-link" >Alternativa</a>
                            </li>
                            <li class="link">
                                <a href="classes/Questao.html" data-type="entity-link" >Questao</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AprendizagemEInformaticaService.html" data-type="entity-link" >AprendizagemEInformaticaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceAppService.html" data-type="entity-link" >ServiceAppService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Bloqueio.html" data-type="entity-link" >Bloqueio</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/comentario.html" data-type="entity-link" >comentario</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Questao.html" data-type="entity-link" >Questao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Topico.html" data-type="entity-link" >Topico</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TopicoF.html" data-type="entity-link" >TopicoF</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});