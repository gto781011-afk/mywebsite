import { motion, useReducedMotion } from 'framer-motion';
import { File02, Stars02, FileCheck02, Check, DotsHorizontal } from '@untitledui/icons';
const nodes = [
  {title:'收到資料', subtitle:'郵件 / 表單 / 試算表', Icon:File02},
  {title:'AI 整理重點', subtitle:'摘要 / 分類 / 萃取重點', Icon:Stars02},
  {title:'自動產出報告', subtitle:'文件 / 簡報 / 郵件', Icon:FileCheck02},
];
export function Workflow() {
  const reduce = useReducedMotion();
  return <div className="workflow" aria-label="自動化流程示意：收到資料，AI 整理重點，自動產出報告，流程完成">
    <img className="chrome-loop" src="/assets/chrome-loop.png" alt="" fetchPriority="high" width="1536" height="1024" />
    <svg className="connections" viewBox="0 0 600 520" fill="none" aria-hidden="true">
      <motion.path d="M100 126 C100 190 30 162 45 216 S180 210 190 225 M410 270 C410 320 470 285 475 345 S450 425 520 425" stroke="currentColor" strokeWidth="2.5" initial={reduce ? false : {pathLength:0}} animate={{pathLength:1}} transition={{duration:1.8,delay:0.6}}/>
      {[ [100,126], [47,195], [190,225], [410,270], [475,345], [520,425] ].map(([cx,cy],i)=><motion.circle key={i} cx={cx} cy={cy} r="6" fill="#baff38" initial={reduce ? false : {opacity:0}} animate={{opacity:1}} transition={{delay:0.6+i*0.2}}/>)}
    </svg>
    {nodes.map(({title,subtitle,Icon},i)=><motion.div className={`flow-card flow-card-${i}`} key={title} initial={reduce ? false : {opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2+i*0.2}}><div className="flow-icon"><Icon /></div><div><strong>{title}</strong><span>{subtitle}</span></div><DotsHorizontal className="flow-dots" aria-hidden="true"/></motion.div>)}
    <motion.div className="flow-complete" initial={reduce ? false : {opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{delay:reduce?0:1.8}}><span><Check /></span>流程完成</motion.div>
  </div>;
}
