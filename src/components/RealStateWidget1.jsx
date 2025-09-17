// import React, { useEffect, useRef, useState } from "react";
// import styles from "@/components/RealState.module.css";
// import gsap from "gsap";
// import { CiSquarePlus } from "react-icons/ci";
// import { RxCross2 } from "react-icons/rx";
// import { FaArrowRightLong } from "react-icons/fa6";
// // import floorImage from '../../assets/floor1.jpg'; // download image or use URL directly

// const RealStateWidget1 = () => {
//   // const animationRef = useRef(null);
//   const containerRef = useRef(null);
//   const titleRef = useRef(null);
//   const fadeUpEls = useRef([]);
//   const fadeEls = useRef([]);
//   const lineRef = useRef(null);
//   const [expanded, setExpanded] = useState(false);

//   // Initial mount + resize listener
//   useEffect(() => {
//     const resizeHandler = () => {
//       updateSizeVars();
//     };
//     window.addEventListener("resize", resizeHandler);
//     updateSizeVars();
//     // Wait a tick to ensure layout is done
//     setTimeout(() => updateSizeVars(), 50);

//     return () => window.removeEventListener("resize", resizeHandler);
//   }, []);

//   const updateSizeVars = () => {
//     if (containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();
//       containerRef.current.style.setProperty("--size-x", `${rect.width}px`);
//       containerRef.current.style.setProperty("--size-y", `${rect.height}px`);
//     }
//   };

//   const handleExpand = () => {
//     if (!containerRef.current || !fadeUpEls.current || !fadeEls.current) return;

//     const contentEl = containerRef.current.querySelector(
//       `.${styles.boxContent}`
//     );
//     if (!contentEl) return;

//     // Reset to collapsed size first
//     containerRef.current.style.setProperty("--size-x", "20.5rem");
//     containerRef.current.style.setProperty("--size-y", "4rem");

//     // Get dynamic size of the content
//     const contentRect = contentEl.getBoundingClientRect();
//     const fullWidth = contentRect.width;
//     const fullHeight = contentRect.height;

//     // Start timeline
//     const tl = gsap.timeline({
//       onComplete: () => {
//         contentEl.classList.add(styles.show);
//       },
//     });

//     // Animate to match .boxContent size
//     tl.to(containerRef.current, {
//       "--size-x": `${fullWidth}px`,
//       "--size-y": `${fullHeight}px`,
//       duration: 1.2,
//       ease: "power3.inOut",
//     });

//     // Animate content after expand
//     tl.from(
//       fadeUpEls.current,
//       {
//         opacity: 0,
//         y: "100px",
//         stagger: 0.1,
//         duration: 1.2,
//         ease: "power3.out",
//       },
//       ">-0.5"
//     );

//     tl.from(
//       fadeEls.current,
//       {
//         opacity: 0,
//         stagger: 0.1,
//         duration: 1.2,
//         ease: "power3.out",
//       },
//       ">-1.1"
//     );

//     if (lineRef.current) {
//       tl.from(
//         lineRef.current,
//         {
//           scaleX: 0,
//           transformOrigin: "left center",
//           duration: 1,
//           ease: "power2.out",
//         },
//         ">-1"
//       );
//     }

//     setExpanded(true);
//   };

//   const handleCollapse = () => {
//     const tl = gsap.timeline({
//       onStart: () => {
//         containerRef.current
//           .querySelector(`.${styles.boxContent}`)
//           .classList.remove(styles.show);
//       },
//     });

//     tl.to(containerRef.current, {
//       "--size-x": "20.5rem",
//       "--size-y": "4rem",
//       duration: 1.25,
//       ease: "power3.inOut",
//     });

//     setExpanded(false);
//   };

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.box} ref={containerRef}>
//         <div className={`${styles.boxContent} ${expanded ? styles.show : ""}`}>
//           <div className={styles.innerBox}>
//             <article className={styles.article}>
//               <header className={styles.header}>
//                 <div
//                   //    className={styles.floorLabel}
//                   className={`${styles.fade}`}
//                   ref={(el) => (fadeEls.current[0] = el)}
//                 >
//                   Floor 1
//                 </div>
//                 <button
//                   type="button"
//                   className={styles.closeBtn}
//                   onClick={handleCollapse}
//                 >
//                   <RxCross2 className={styles.closeIcon} />
//                 </button>
//                 <hr className={styles.separator} ref={lineRef} />
//               </header>

//               <div className={styles.content}>
//                 <div className={styles.titleSection}>
//                   <h2 className={styles.title}>
//                     <span ref={(el) => (fadeUpEls.current[0] = el)}>
//                       Entertaining
//                     </span>{" "}
//                     <span ref={(el) => (fadeUpEls.current[1] = el)}>Suite</span>
//                   </h2>
//                 </div>

//                 <div className={styles.imageWrapper}>
//                   <div className={styles.media_fill}>
//                     <figure>
//                       <img
//                         src={
//                           "https://images.unsplash.com/photo-1716547286289-3e650d7bdf7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVuc3BhbHNofGVufDB8fDB8fHww"
//                         }
//                         alt="Floor 1"
//                       />
//                     </figure>
//                   </div>
//                 </div>

//                 <div className={styles.description}>
//                   <p ref={(el) => (fadeUpEls.current[2] = el)}>
//                     The residence features direct elevator entry to a grand
//                     receiving hall with white macauba stone flooring leading to
//                     the expansive Great Room with custom smoke-gray solid oak
//                     floors in an intricate pattern...
//                   </p>
//                   <p ref={(el) => (fadeUpEls.current[3] = el)}>
//                     The corner south-facing kitchen offers stunning city skyline
//                     views, custom cabinetry designed by Studio Sofield...
//                   </p>
//                   <p ref={(el) => (fadeUpEls.current[4] = el)}>
//                     The residence features direct elevator entry to a grand
//                     receiving hall with white macauba stone flooring leading to
//                     the expansive Great Room with custom smoke-gray solid oak
//                     floors in an intricate pattern...
//                   </p>
//                   <p ref={(el) => (fadeUpEls.current[5] = el)}>
//                     The corner south-facing kitchen offers stunning city skyline
//                     views, custom cabinetry designed by Studio Sofield...
//                   </p>
//                   <p ref={(el) => (fadeUpEls.current[6] = el)}>
//                     The residence features direct elevator entry to a grand
//                     receiving hall with white macauba stone flooring leading to
//                     the expansive Great Room with custom smoke-gray solid oak
//                     floors in an intricate pattern...
//                   </p>
//                   <p ref={(el) => (fadeUpEls.current[7] = el)}>
//                     The corner south-facing kitchen offers stunning city skyline
//                     views, custom cabinetry designed by Studio Sofield...
//                   </p>
//                   <p ref={(el) => (fadeUpEls.current[8] = el)}>
//                     The residence features direct elevator entry to a grand
//                     receiving hall with white macauba stone flooring leading to
//                     the expansive Great Room with custom smoke-gray solid oak
//                     floors in an intricate pattern...
//                   </p>
//                   <p ref={(el) => (fadeUpEls.current[9] = el)}>
//                     The corner south-facing kitchen offers stunning city skyline
//                     views, custom cabinetry designed by Studio Sofield...
//                   </p>
//                 </div>
//                 <button className={styles.btn_norm} type="button">
//                   <div className={styles.btn_norm__content}>
//                     <div className={styles.btn_norm_label}>
//                       <div className={styles.btn_norm_label__text}>
//                         Floor Plans
//                       </div>
//                     </div>
//                     <FaArrowRightLong
//                       className={`${styles.btn_norm__a} ${styles.__1}`}
//                     />

//                     <div className={styles.btn_norm__mask} aria-hidden="true">
//                       <div className={styles.btn_norm_label}>
//                         <FaArrowRightLong
//                           className={`${styles.btn_norm__a} ${styles.__2}`}
//                         />

//                         <div className={styles.btn_norm_label__text}>
//                           Floor Plans
//                         </div>
//                       </div>
//                       <FaArrowRightLong
//                         className={`${styles.btn_norm__a} ${styles.__1}`}
//                       />
//                     </div>
//                   </div>
//                 </button>
//               </div>
//             </article>
//           </div>
//         </div>
//         <div className={styles.boxFill}>
//           <div
//             className={styles.box__preview}
//             onClick={handleExpand}
//           >
//             <div className={styles.stackBox}>
//               {!expanded && (
//                 <>
//                 <div className={styles.buttonTextbox}>
//                 <span>Entertaining Suite</span>
//               </div>
//                 <div>
//                   <CiSquarePlus className={styles.boxPlusBtn} />
//                 </div>
//                 </>
//           )}
//           </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RealStateWidget1;




import React, { useEffect, useRef, useState } from "react";
import styles from "@/components/RealState.module.css";
import gsap from "gsap";
import { CiSquarePlus } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";

// Constants for default collapsed size
const COLLAPSED_WIDTH = "20.5rem";
const COLLAPSED_HEIGHT = "4rem";

const RealStateWidget1 = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const fadeUpEls = useRef([]);
  const fadeEls = useRef([]);
  const lineRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const animationRef = useRef(null);

  // Clear animation refs on rerender
  fadeUpEls.current = [];
  fadeEls.current = [];

  useEffect(() => {
    const updateSizeVars = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        containerRef.current.style.setProperty("--size-x", `${rect.width}px`);
        containerRef.current.style.setProperty("--size-y", `${rect.height}px`);
      }
    };

    const resizeHandler = () => updateSizeVars();

    window.addEventListener("resize", resizeHandler);
    updateSizeVars();
    setTimeout(updateSizeVars, 50);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

const handleExpand = () => {
  if (!containerRef.current) return;

  const contentEl = containerRef.current.querySelector(
    `.${styles.boxContent}`
  );
  if (!contentEl) return;

  // Kill previous animation if any
  if (animationRef.current) {
    animationRef.current.kill();
  }

  containerRef.current.style.setProperty("--size-x", COLLAPSED_WIDTH);
  containerRef.current.style.setProperty("--size-y", COLLAPSED_HEIGHT);

  const contentRect = contentEl.getBoundingClientRect();
  const fullWidth = contentRect.width;
  const fullHeight = contentRect.height;

  const tl = gsap.timeline({
    onComplete: () => {
      contentEl.classList.add(styles.show);
      animationRef.current = null;
    },
  });
gsap.to(`.${styles.box__preview}`,{
})
  animationRef.current = tl;

  tl.to(containerRef.current, {
    "--size-x": `${fullWidth}px`,
    "--size-y": `${fullHeight}px`,
    duration: 1.2,
    ease: "power3.inOut",
  });

  tl.from(
    fadeUpEls.current,
    {
      opacity: 0,
      y: 100,
      stagger: 0.1,
      duration: 1.2,
      ease: "power3.out",
    },
    "a"
  );

  tl.from(
    fadeEls.current,
    {
      opacity: 0,
      stagger: 0.05,
      duration: 1.2,
      ease: "power3.out",
    },
    "a"
  );
  tl.set(`.${styles.box__preview}`, { zIndex: 0 });

  if (lineRef.current) {
    tl.from(
      lineRef.current,
      {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.out",
      },
      ">-1"
    );
  }

  setExpanded(true);
};


const handleCollapse = () => {
  const contentEl = containerRef.current.querySelector(
    `.${styles.boxContent}`
  );
  if (!contentEl) return;

  // Kill any existing animation
  if (animationRef.current) {
    animationRef.current.kill();
    animationRef.current = null;
  }

  contentEl.classList.remove(styles.show);

  const tl = gsap.timeline();

  animationRef.current = tl;

  tl.to(containerRef.current, {
    "--size-x": COLLAPSED_WIDTH,
    "--size-y": COLLAPSED_HEIGHT,
    duration: 1.25,
    ease: "power3.inOut",
    onComplete: () => {
      animationRef.current = null;
    },
  });
  tl.set(`.${styles.box__preview}`, { zIndex: 9 });


  setExpanded(false);
};


  return (
    <div className={styles.wrapper} style={{backgroundImage:"url(https://www.datocms-assets.com/143478/1743156408-gr-hero.jpg?auto=format&fit=max&h=1920&q=85&w=1920)"}}>
     {/* <div className={styles.boxImgCntr}>
      <img className={styles.boxImg} src="https://www.datocms-assets.com/143478/1743156408-gr-hero.jpg?auto=format&fit=max&h=1920&q=85&w=1920" alt="" /></div> */}
      <div className={styles.box} ref={containerRef}>
        <div className={`${styles.boxContent} ${expanded ? styles.show : ""}`}>
          <div className={styles.innerBox}>
            <article className={styles.article}>
              <header className={styles.header}>
                <div
                  className={styles.fade}
                  ref={(el) => el && (fadeEls.current[0] = el)}
                >
                  Floor 1
                </div>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={handleCollapse}
                  aria-label="Close"
                >
                  <RxCross2 className={styles.closeIcon} />
                </button>
                <hr className={styles.separator} ref={lineRef} />
              </header>

              <div className={styles.content}>
                <div className={styles.titleSection}>
                  <h2 className={styles.title}>
                    <span ref={(el) => el && (fadeEls.current[1] = el)}>
                      Entertaining
                    </span>{" "}
                    <span ref={(el) => el && (fadeEls.current[2] = el)}>
                      Suite
                    </span>
                  </h2>
                </div>

                <div className={styles.imageWrapper} ref={(el) => el && (fadeEls.current[3] = el)}>
                  <div className={styles.media_fill}>
                    <figure>
                      <img
                        src="https://images.unsplash.com/photo-1716547286289-3e650d7bdf7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVuc3BhbHNofGVufDB8fDB8fHww"
                        alt="Floor 1"
                      />
                    </figure>
                  </div>
                </div>

                <div className={styles.description}>
                  {[...Array(2)].map((_, i) => (
                    <p
                      key={i}
                      ref={(el) => el && (fadeUpEls.current[i + 2] = el)}
                    >
                      {i % 2 === 0
                        ? "The residence features direct elevator entry to a grand receiving hall with white macauba stone flooring leading to the expansive Great Room with custom smoke-gray solid oak floors in an intricate pattern..."
                        : "The corner south-facing kitchen offers stunning city skyline views, custom cabinetry designed by Studio Sofield..."}
                    </p>
                  ))}
                </div>

                <button className={styles.btn_norm} type="button">
                  <div className={styles.btn_norm__content}>
                    <div className={styles.btn_norm_label}>
                      <div className={styles.btn_norm_label__text}>
                        Floor Plans
                      </div>
                    </div>
                    <FaArrowRightLong
                      className={`${styles.btn_norm__a} ${styles.__1}`}
                    />

                    <div
                      className={styles.btn_norm__mask}
                      aria-hidden="true"
                    >
                      <div className={styles.btn_norm_label}>
                        <FaArrowRightLong
                          className={`${styles.btn_norm__a} ${styles.__2}`}
                        />
                        <div className={styles.btn_norm_label__text}>
                          Floor Plans
                        </div>
                      </div>
                      <FaArrowRightLong
                        className={`${styles.btn_norm__a} ${styles.__1}`}
                      />
                    </div>
                  </div>
                </button>
              </div>
            </article>
          </div>
        </div>

        <div className={styles.boxFill}>
          <div className={styles.box__preview} onClick={handleExpand}>
            <div className={styles.stackBox}>
              {!expanded && (
                <>
                  <div className={styles.buttonTextbox}>
                    <span>Entertaining Suite</span>
                  </div>
                  <div>
                    <CiSquarePlus className={styles.boxPlusBtn} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealStateWidget1;







