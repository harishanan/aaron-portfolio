import React from "react";
import Image from "next/image";
import LayeredWave from "../assets/layered-waves.svg";

const Contact = () => {
  return (
    <div className="-mt-2">
      <h3 className="text-5xl text-center uppercase">Contact</h3>
      <p className="w-1/4 mx-auto text-center text-xl">
        I love to chat about new opportunities as well as my past and current
        work! Feel free to message me on LinkedIn or send me an email.
      </p>
      <div className="flex-row flex justify-center items-center">
        <div className="w-14 h-14 bg-gray-400 mx-5" />
        <div className="w-14 h-14 bg-gray-400 mx-5" />
        <div className="w-14 h-14 bg-gray-400 mx-5" />
      </div>
      {/* <Image src={LayeredWave} width={500} height={200} /> */}
      <footer className="relative">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="w-full -mt-32"
          height="600"
          preserveAspectRatio="none"
        >
          <path
            d="M0 378L21.5 373.8C43 369.7 86 361.3 128.8 370.3C171.7 379.3 214.3 405.7 257.2 416.7C300 427.7 343 423.3 385.8 419.2C428.7 415 471.3 411 514.2 401.2C557 391.3 600 375.7 642.8 379.8C685.7 384 728.3 408 771.2 420.7C814 433.3 857 434.7 878.5 435.3L900 436L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#65c9ff"
          ></path>
          <path
            d="M0 414L21.5 416C43 418 86 422 128.8 418.8C171.7 415.7 214.3 405.3 257.2 403.8C300 402.3 343 409.7 385.8 418.7C428.7 427.7 471.3 438.3 514.2 443.3C557 448.3 600 447.7 642.8 452.3C685.7 457 728.3 467 771.2 466.7C814 466.3 857 455.7 878.5 450.3L900 445L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#54acdc"
          ></path>
          <path
            d="M0 509L21.5 507.7C43 506.3 86 503.7 128.8 503.8C171.7 504 214.3 507 257.2 505.7C300 504.3 343 498.7 385.8 496.5C428.7 494.3 471.3 495.7 514.2 491.2C557 486.7 600 476.3 642.8 470.7C685.7 465 728.3 464 771.2 461.7C814 459.3 857 455.7 878.5 453.8L900 452L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#448fb9"
          ></path>
          <path
            d="M0 499L21.5 505C43 511 86 523 128.8 529.3C171.7 535.7 214.3 536.3 257.2 531.3C300 526.3 343 515.7 385.8 510.5C428.7 505.3 471.3 505.7 514.2 507.7C557 509.7 600 513.3 642.8 510.3C685.7 507.3 728.3 497.7 771.2 498.2C814 498.7 857 509.3 878.5 514.7L900 520L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#347397"
          ></path>
          <path
            d="M0 571L21.5 565.2C43 559.3 86 547.7 128.8 543.5C171.7 539.3 214.3 542.7 257.2 544.7C300 546.7 343 547.3 385.8 548.8C428.7 550.3 471.3 552.7 514.2 552.8C557 553 600 551 642.8 546.5C685.7 542 728.3 535 771.2 538.3C814 541.7 857 555.3 878.5 562.2L900 569L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#255977"
          ></path>
        </svg>
        <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white">
          COPYRIGHT @2021 AARON ANANTHARAJAH. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
