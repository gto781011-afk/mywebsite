import { Dialog, Modal, ModalOverlay, Heading } from 'react-aria-components';
import { ArrowDown, XClose, ArrowUpRight } from '@untitledui/icons';
import { Button } from './base/buttons/button';
export function CourseDialog({open,onChange}:{open:boolean;onChange:(open:boolean)=>void}) {
  return <ModalOverlay isOpen={open} onOpenChange={onChange} isDismissable className="modal-overlay"><Modal className="course-modal"><Dialog className="course-dialog">{({close})=><>
    <Button className="icon-button dialog-close" color="tertiary" aria-label="關閉課程資訊" iconLeading={XClose} onPress={close}/>
    <div className="dialog-symbol"><ArrowUpRight/></div><p className="eyebrow">YOUR FIRST AUTOMATION</p><Heading slot="title">你的第一個自動化，<br/>從這裡開始。</Heading>
    <p className="dialog-description">從日常任務出發，學習提示詞、工具串接與流程實作。先下載課程大綱，看看你將學會什麼。</p>
    <dl className="course-facts"><div><dt>適合對象</dt><dd>AI 自動化初學者</dd></div><div><dt>課程形式與時數</dt><dd>即將公布</dd></div><div><dt>開課日期與費用</dt><dd>即將公布</dd></div></dl>
    <Button href="/course-outline.txt" download="AI自動化實戰課-課程大綱.txt" className="site-button lime-button download-button" size="xl" iconTrailing={ArrowDown}>下載課程大綱</Button>
    <p className="dialog-note">報名尚未開放，正式資訊將於本頁更新。</p>
  </>}</Dialog></Modal></ModalOverlay>;
}
