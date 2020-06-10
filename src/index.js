// import { fromEvent } from "rxjs";
// import { throttleTime, scan, count, take, filter, map } from "rxjs/operators";

// import { Observable } from "rxjs";

/** formEvent
 * */
// fromEvent(document, "click")
//   .pipe(
//     throttleTime(1000), // 每1000ms 最多执行一次
//     map((e) => e.clientX), // 遍历每次点击，修改返回的值
//     scan((count, clientX) => count + clientX, 0), // 每次遍历对值进行计算，类似于reduce
//     take(4) // 只取四笔
//   )
// .subscribe(console.log); // 订阅

/**
 * Observable 可观察的对象
 */

// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });

// let subs = observable.subscribe(console.log);
// let subs2 = observable.subscribe(console.log)

/**
 * Subscription 订阅
 */
// const observable = Observable.create((subscriber) => {
//   let count = 1;
//   setInterval(() => {
//     if (count > 5) {
//       subscriber.complete(count);
//     }
//     subscriber.next(count++);
//   }, 1000);
// });

// var subs = observable.subscribe({
//   next: (x) => {
//     console.log(x);
//   },
//   error: () => {},
//   complete: (x) => {
//     console.log("complete");
//     console.log(x);
//   },
// });

// var subs2 = observable.subscribe({
//     next: (x) => {
//         console.log(x)
//     }
// })

/**
 * Subject 主体
 */

// import { Subject, fromEvent } from "rxjs";

// window.subject = new Subject();

// let click$ = fromEvent(document, 'click');

// click$.subscribe(subject);

// subject.subscribe(console.log)

// subject.subscribe({next: (observe) => {
//     console.log(observe, '}}}}}||||');
// }})

// import {interval} from 'rxjs'

// console.log(interval);

// let observable = interval(400)

// import { from, Subject } from 'rxjs';
// import { multicast } from 'rxjs/operators';

// const source = from([1, 2, 3]);
// const subject = new Subject();
// const multicasted = source.pipe(multicast(subject));

// // These are, under the hood, `subject.subscribe({...})`:
// multicasted.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });
// multicasted.subscribe({
//   next: (v) => console.log(`observerB: ${v}`)
// });

// // This is, under the hood, `source.subscribe(subject)`:
// multicasted.connect();

/* behaviorSubject 行为主体 */

/* import { Subject, BehaviorSubject } from 'rxjs';

const bsubject = new BehaviorSubject(0);
bsubject.subscribe({
    next: v => console.log(`bobsA: ${v}`)
})
bsubject.next(1)
bsubject.next(2)
bsubject.subscribe({
    next: v => console.log(`bobsB: ${v}`)
})
bsubject.next(3)
console.log("--------");
const subject = new Subject(0);
subject.subscribe({
    next: v => console.log(`obsA: ${v}`)
})
subject.next(1)
subject.next(2)
subject.subscribe({
    next: v => console.log(`obsB: ${v}`)
})
subject.next(3) */

/* ReplaySubject 旧值推送，参数：推送历史条数 */

// import { ReplaySubject } from 'rxjs';
// const subject = new ReplaySubject(3);

// subject.subscribe({
//   next: (v) => console.log(v),
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//   next: (v) => console.log('two' + v),
// });
// subject.next(5);

/* 同步主体，只有在完成时才会发送最后一个值给观察者 */

// import { AsyncSubject } from 'rxjs';
// const subject = new AsyncSubject();

// subject.subscribe({
//   next: (v) => console.log(v),
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//   next: (v) => console.log(`observerB: ${v}`),
// });

// subject.next(5);
// subject.complete();

/* Scheduler 调度器 */

import { Observable, asyncScheduler, from } from 'rxjs';
import { observeOn } from 'rxjs/operators';

const observable = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
}).pipe(observeOn(asyncScheduler));

console.log('just before subscribe');

observable.subscribe({
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  },
});

console.log('just after subscribe');
