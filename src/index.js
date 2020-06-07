// import { fromEvent } from "rxjs";
// import { throttleTime, scan, count, take, filter, map } from "rxjs/operators";

import { Observable, from } from "rxjs";
import { rxSubscriber } from "rxjs/internal-compatibility";

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

var source = Observable.interval(500)