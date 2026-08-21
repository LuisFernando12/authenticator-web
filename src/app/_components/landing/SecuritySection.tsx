'use client';

import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, Database, Lock, Eye, Activity } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const SecuritySection: React.FC = () => {
    const [selectedEventId, setSelectedEventId] = useState<string>('evt_01');
    const { language } = useLanguage();

    const content = {
        en: {
            badge: 'Real-Time Incident Engine',
            title: "Security isn't an afterthought.",
            subtitle: 'Suspicious activity becomes an auditable security trail. Every invalid attempt and token anomaly is automatically persisted to PostgreSQL and Redis.',
            pipeEvent: 'Security Event',
            pipeIncident: 'Security Incident',
            pipeTrail: 'Audit Trail',
            pipeStorage: 'PostgreSQL & Redis',
            streamHeader: 'Live Security Incident Stream',
            engineHeader: 'Storage Engine: Redis + Postgres',
            inspectorHeader: 'Incident Inspector',
            eventType: 'Event Type',
            severity: 'Severity',
            clientIp: 'Client IP',
            clientLabel: 'Client',
            auditPayload: 'Audit Payload',
            sessionNote: 'Session token revoked in Redis',
            events: [
                {
                    id: 'evt_01',
                    type: 'TOKEN_REUSE_DETECTED' as const,
                    severity: 'CRITICAL',
                    timestamp: '2026-08-21T17:18:02Z',
                    clientIp: '198.51.100.42',
                    clientId: 'app_mobile_ios',
                    status: 'REVOKED & LOGGED',
                    meta: 'Refresh token rt_9901 reused after previous rotation. Flushed token family fam_7718.',
                },
                {
                    id: 'evt_02',
                    type: 'OAUTH_INVALID' as const,
                    severity: 'HIGH',
                    timestamp: '2026-08-21T17:15:44Z',
                    clientIp: '203.0.113.19',
                    clientId: 'unknown_client',
                    status: 'BLOCKED',
                    meta: 'Invalid code_challenge_method provided. Expected S256, received plain.',
                },
                {
                    id: 'evt_03',
                    type: 'LOGIN_INVALID' as const,
                    severity: 'MEDIUM',
                    timestamp: '2026-08-21T17:10:11Z',
                    clientIp: '192.0.2.14',
                    clientId: 'app_web_dashboard',
                    status: 'ALERT TRIGGERED',
                    meta: 'Failed password attempt for user usr_44102. Incrementing Redis attempt window rate-limiter.',
                },
            ],
        },
        pt: {
            badge: 'Engine de Incidentes em Tempo Real',
            title: 'Segurança não é um detalhe secundário.',
            subtitle: 'Atividades suspeitas se tornam uma trilha de segurança auditável. Cada tentativa inválida e anomalia de token é automaticamente persistida no PostgreSQL e Redis.',
            pipeEvent: 'Evento de Segurança',
            pipeIncident: 'Incidente de Segurança',
            pipeTrail: 'Trilha de Auditoria',
            pipeStorage: 'PostgreSQL e Redis',
            streamHeader: 'Stream de Incidentes de Segurança em Tempo Real',
            engineHeader: 'Motor: Redis + Postgres',
            inspectorHeader: 'Inspetor de Incidentes',
            eventType: 'Tipo de Evento',
            severity: 'Severidade',
            clientIp: 'IP do Cliente',
            clientLabel: 'Cliente',
            auditPayload: 'Payload de Auditoria',
            sessionNote: 'Token de sessão revogado no Redis',
            events: [
                {
                    id: 'evt_01',
                    type: 'TOKEN_REUSE_DETECTED' as const,
                    severity: 'CRÍTICO',
                    timestamp: '2026-08-21T17:18:02Z',
                    clientIp: '198.51.100.42',
                    clientId: 'app_mobile_ios',
                    status: 'REVOGADO E REGISTRADO',
                    meta: 'Reuso do token de atualização rt_9901 detectado após rotação anterior. Família de tokens fam_7718 revogada.',
                },
                {
                    id: 'evt_02',
                    type: 'OAUTH_INVALID' as const,
                    severity: 'ALTO',
                    timestamp: '2026-08-21T17:15:44Z',
                    clientIp: '203.0.113.19',
                    clientId: 'cliente_desconhecido',
                    status: 'BLOQUEADO',
                    meta: 'code_challenge_method inválido fornecido. Esperado S256, recebido plain.',
                },
                {
                    id: 'evt_03',
                    type: 'LOGIN_INVALID' as const,
                    severity: 'MÉDIO',
                    timestamp: '2026-08-21T17:10:11Z',
                    clientIp: '192.0.2.14',
                    clientId: 'app_web_dashboard',
                    status: 'ALERTA DISPARADO',
                    meta: 'Tentativa incorreta de senha para o usuário usr_44102. Incrementando limite de taxa no Redis.',
                },
            ],
        },
    };

    const t = content[language];
    const currentEvent = t.events.find((e) => e.id === selectedEventId) || t.events[0];

    return (
        <section id="security" className="py-20 md:py-28 bg-zinc-950/80 border-b border-zinc-800/60 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Cabeçalho da Seção */}
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-900/60 bg-red-950/30 px-3 py-1 text-xs text-red-400 font-mono">
                        <ShieldAlert className="h-3.5 w-3.5" />
                        <span>{t.badge}</span>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl font-mono">
                        {t.title}
                    </h2>
                    <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                {/* Visualização da Pipeline de Eventos */}
                <div className="mt-12 max-w-4xl mx-auto rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 font-mono text-xs text-center">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-zinc-400">
                        <div className="flex items-center gap-1.5 bg-zinc-950 px-3 py-1.5 rounded border border-zinc-800">
                            <Activity className="h-3.5 w-3.5 text-amber-400" />
                            <span>{t.pipeEvent}</span>
                        </div>
                        <span className="text-zinc-600">→</span>
                        <div className="flex items-center gap-1.5 bg-zinc-950 px-3 py-1.5 rounded border border-zinc-800">
                            <AlertTriangle className="h-3.5 w-3.5 text-red-400" />
                            <span>{t.pipeIncident}</span>
                        </div>
                        <span className="text-zinc-600">→</span>
                        <div className="flex items-center gap-1.5 bg-zinc-950 px-3 py-1.5 rounded border border-zinc-800">
                            <Eye className="h-3.5 w-3.5 text-cyan-400" />
                            <span>{t.pipeTrail}</span>
                        </div>
                        <span className="text-zinc-600">→</span>
                        <div className="flex items-center gap-1.5 bg-zinc-950 px-3 py-1.5 rounded border border-zinc-800 text-emerald-400">
                            <Database className="h-3.5 w-3.5" />
                            <span>{t.pipeStorage}</span>
                        </div>
                    </div>
                </div>

                {/* Stream de Auditoria */}
                <div className="mt-10 max-w-5xl mx-auto rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
                    {/* Header */}
                    <div className="bg-zinc-900 px-6 py-3 border-b border-zinc-800 flex items-center justify-between font-mono text-xs">
                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="font-semibold text-zinc-200 uppercase tracking-wider">
                                {t.streamHeader}
                            </span>
                        </div>
                        <span className="text-zinc-500">{t.engineHeader}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12">
                        {/* Lista de Eventos (7 cols) */}
                        <div className="md:col-span-7 border-r border-zinc-800 divide-y divide-zinc-800/80">
                            {t.events.map((evt) => {
                                const isSelected = evt.id === selectedEventId;
                                return (
                                    <button
                                        key={evt.id}
                                        onClick={() => setSelectedEventId(evt.id)}
                                        className={`w-full text-left p-4 transition-colors cursor-pointer font-mono ${
                                            isSelected ? 'bg-zinc-900/90' : 'hover:bg-zinc-900/40'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span
                                                className={`text-xs font-bold ${
                                                    evt.severity === 'CRITICAL' || evt.severity === 'CRÍTICO'
                                                        ? 'text-red-400'
                                                        : evt.severity === 'HIGH' || evt.severity === 'ALTO'
                                                        ? 'text-amber-400'
                                                        : 'text-zinc-300'
                                                }`}
                                            >
                                                {evt.type}
                                            </span>
                                            <span className="text-[10px] text-zinc-500">{evt.timestamp}</span>
                                        </div>

                                        <div className="flex items-center justify-between text-[11px] text-zinc-400">
                                            <span>{t.clientLabel}: {evt.clientId}</span>
                                            <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded text-[10px] border border-emerald-900">
                                                {evt.status}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Inspetor de Eventos (5 cols) */}
                        <div className="md:col-span-5 p-6 bg-zinc-900/30 space-y-4 font-mono text-xs">
                            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                                <span className="text-zinc-400 uppercase font-semibold text-[11px]">
                                    {t.inspectorHeader}
                                </span>
                                <span className="text-cyan-400 font-bold">{currentEvent.id}</span>
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <span className="text-zinc-500 text-[10px] block uppercase">{t.eventType}</span>
                                    <span className="text-zinc-100 font-bold text-sm">{currentEvent.type}</span>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <span className="text-zinc-500 text-[10px] block uppercase">{t.severity}</span>
                                        <span
                                            className={`font-semibold ${
                                                currentEvent.severity === 'CRITICAL' || currentEvent.severity === 'CRÍTICO'
                                                    ? 'text-red-400'
                                                    : 'text-amber-400'
                                            }`}
                                        >
                                            {currentEvent.severity}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-zinc-500 text-[10px] block uppercase">{t.clientIp}</span>
                                        <span className="text-zinc-300">{currentEvent.clientIp}</span>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-zinc-500 text-[10px] block uppercase mb-1">{t.auditPayload}</span>
                                    <div className="bg-zinc-950 p-3 rounded border border-zinc-800 text-zinc-300 leading-relaxed text-[11px]">
                                        {currentEvent.meta}
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-500 flex items-center gap-1.5">
                                    <Lock className="h-3.5 w-3.5 text-emerald-400" />
                                    <span>{t.sessionNote}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
