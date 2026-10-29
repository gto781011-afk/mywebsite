import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, LayersTwo01, Zap, CheckCircle, Copy01, Edit03, Share07, BookOpen01, MessageChatCircle, Database01, Cube01, Briefcase01, Laptop01, User01, Menu01, XClose } from '@untitledui/icons';
import { Button } from './components/base/buttons/button';
import { Reveal } from './components/Reveal';
import { Workflow } from './components/Workflow';
const registrationUrl = 'https://google.com/';
const nav = [['課程亮點','#features'],['學習路線','#curriculum'],['常見問題','#faq']];
const features = [
  {title:'資料整理', text:'讓零散資訊變成清楚摘要', Icon:Copy01, href:'#module-1'},
  {title:'內容產出', text:'建立可重複使用的內容流程', Icon:Edit03, href:'#module-2'},
  {title:'任務串接', text:'把多個工具連成一套工作流', Icon:Share07, href:'#module-3'},
];
const modules = [
  {title:'看懂 AI 與自動化', text:'找到值得自動化的任務', Icon:BookOpen01},
  {title:'設計有效的提示詞', text:'讓輸出更符合你的需求', Icon:MessageChatCircle},
  {title:'串接工具與資料', text:'建立流程、測試與除錯', Icon:Database01},
  {title:'完成你的實作專案', text:'把所學用在真實工作情境', Icon:Cube01},
];
function Header() {
  const [menu,setMenu]=useState(false);
  const reduce=useReducedMotion();
  return <header className="site-header"><div className="container header-inner"><a className="wordmark" href="#top" aria-label="AI 自動化實戰課，回到首頁">AI 自動化實戰課</a><nav className="desktop-nav" aria-label="主要導覽">{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav><Button className="site-button dark-button header-cta" href={registrationUrl} iconTrailing={ArrowUpRight}>立即報名課程</Button><Button className="icon-button menu-toggle" color="tertiary" aria-label={menu?'關閉選單':'開啟選單'} aria-expanded={menu} aria-controls="mobile-nav" iconLeading={menu?XClose:Menu01} onPress={()=>setMenu(!menu)}/></div><AnimatePresence>{menu?<motion.nav id="mobile-nav" className="mobile-nav" aria-label="手機導覽" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduce?0:0.2}} onKeyDown={e=>{if(e.key==='Escape')setMenu(false)}}>{nav.map(([label,href])=><a key={href} href={href} onClick={()=>setMenu(false)}>{label}<ArrowUpRight/></a>)}<Button className="site-button dark-button" href={registrationUrl} onPress={()=>setMenu(false)}>立即報名課程</Button></motion.nav>:null}</AnimatePresence></header>;
}
export default function App(){
  return <><a href="#main" className="skip-link">跳至主要內容</a><div id="top"/><Header/><main id="main">
    <section className="hero"><div className="container hero-grid"><Reveal className="hero-copy"><p className="eyebrow">AI AUTOMATION <span>/</span> 入門到實作</p><h1>把重複工作，<br/>交給 AI。</h1><p className="hero-description">從日常任務出發，打造你的第一個自動化工作流程。</p><div className="hero-actions"><Button href="#features" size="xl" className="site-button lime-button" iconTrailing={ArrowUpRight}>探索課程內容</Button><Button href="#curriculum" color="link-gray" className="text-link" iconTrailing={ArrowRight}>查看學習路線</Button></div></Reveal><Workflow/></div></section>
    <div className="benefit-strip"><div className="container benefits">{[[LayersTwo01,'零程式基礎可入門'],[Zap,'情境式練習'],[CheckCircle,'完成可用的工作流程']].map(([Icon,label])=>{const I=Icon as typeof Zap;return <div key={String(label)}><I aria-hidden="true"/><span>{String(label)}</span></div>})}</div></div>
    <section id="features" className="features-section container"><Reveal><div className="section-heading"><h2>少一點重複，多一點專注。</h2><p>用 AI 自動化日常任務，把時間留給更重要的事。</p></div></Reveal><div className="feature-grid">{features.map(({title,text,Icon,href},i)=><Reveal key={title} delay={i*0.08}><a className="feature-card" href={href}><span className="number">0{i+1}</span><div className="feature-icon"><Icon aria-hidden="true"/></div><div className="feature-title"><h3>{title}</h3><span className="round-arrow"><ArrowRight/></span></div><p>{text}</p></a></Reveal>)}</div></section>
    <section id="curriculum" className="curriculum"><div className="container"><Reveal><p className="eyebrow">LEARNING PATH</p><div className="curriculum-heading"><h2>一步步，做出你的自動化。</h2><div className="heading-rule"/><p>從基礎觀念到實作應用，<br/>循序建立屬於你的工作流程。</p></div></Reveal><div className="module-grid">{modules.map(({title,text,Icon},i)=><Reveal key={title} delay={i*0.07}><article className="module" id={`module-${i+1}`}><span className="number">0{i+1}</span><Icon className="module-icon" aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
    <section className="audience container"><Reveal><h2>這堂課，<br/>適合這樣的你。</h2></Reveal><Reveal className="audience-list">{[[Briefcase01,'想提升工作效率的上班族'],[Laptop01,'需要管理多項任務的自由工作者'],[User01,'想開始運用 AI 的初學者']].map(([Icon,label])=>{const I=Icon as typeof User01;return <div key={String(label)}><I aria-hidden="true"/><p>{String(label)}</p></div>})}</Reveal></section>
    <section id="faq" className="faq container"><Reveal className="faq-heading"><p className="eyebrow">FAQ</p><h2>常見問題</h2></Reveal><div className="faq-list">{[['沒有寫程式經驗，也能學嗎？','以入門觀念與實作流程為起點，逐步理解自動化。'],['可以用在哪些工作情境？','從資料整理、內容草稿到例行報告，練習拆解日常任務。']].map(([q,a])=><Reveal key={q}><div className="faq-row"><span className="qa-symbol">Q</span><h3>{q}</h3><span className="qa-symbol answer-symbol">A</span><p>{a}</p></div></Reveal>)}</div></section>
    <section className="closing"><div className="closing-rings" aria-hidden="true"/><Reveal className="container closing-inner"><h2>讓第一個自動化，<br/>從這堂課開始。</h2><div><Button className="site-button dark-button" size="xl" iconTrailing={ArrowUpRight} href={registrationUrl}>立即報名課程</Button><p>開課日期即將公布。</p></div></Reveal></section>
  </main><footer className="container footer"><a href="#top" className="wordmark">AI 自動化實戰課</a><div/><p>課程網站概念設計</p></footer></>;
}
