import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Component = ({
  width = 1307,
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
  text7 = texts.text7,
  text8 = texts.text8,
  text9 = texts.text9,
  text10 = texts.text10,
  text11 = texts.text11,
  text12 = texts.text12,
  text13 = texts.text13,
  text14 = texts.text14,
  text15 = texts.text15,
  text16 = texts.text16,
  text17 = texts.text17,
  text18 = texts.text18,
  text19 = texts.text19,
  text20 = texts.text20,
  text21 = texts.text21,
  text22 = texts.text22,
  text23 = texts.text23,
  text24 = texts.text24,
  text25 = texts.text25,
  text26 = texts.text26,
  text27 = texts.text27,
  text28 = texts.text28,
  text29 = texts.text29,
  text30 = texts.text30,
  text31 = texts.text31,
  text32 = texts.text32,
  text33 = texts.text33,
  text34 = texts.text34,
  text35 = texts.text35,
  text36 = texts.text36,
  text37 = texts.text37,
  text38 = texts.text38,
  text39 = texts.text39,
  text40 = texts.text40,
  text41 = texts.text41,
  text42 = texts.text42,
  text43 = texts.text43,
  text44 = texts.text44,
  text45 = texts.text45,
  text46 = texts.text46,
  text47 = texts.text47,
  text48 = texts.text48,
  text49 = texts.text49,
  text50 = texts.text50,
  text51 = texts.text51,
  text52 = texts.text52,
  text53 = texts.text53,
  text54 = texts.text54,
  text55 = texts.text55,
  text56 = texts.text56,
  text57 = texts.text57,
  text58 = texts.text58,
  text59 = texts.text59,
  text60 = texts.text60,
  text61 = texts.text61,
  text62 = texts.text62,
  text63 = texts.text63,
  text64 = texts.text64,
  text65 = texts.text65,
  text66 = texts.text66,
  text67 = texts.text67,
  text68 = texts.text68,
  text69 = texts.text69,
  text70 = texts.text70,
  text71 = texts.text71,
  text72 = texts.text72,
  text73 = texts.text73,
  text74 = texts.text74,
  text75 = texts.text75,
  text76 = texts.text76,
  text77 = texts.text77,
  text78 = texts.text78,
  text79 = texts.text79,
  text80 = texts.text80,
  text81 = texts.text81,
  text82 = texts.text82,
  text83 = texts.text83,
  text84 = texts.text84,
  text85 = texts.text85,
  text86 = texts.text86,
  text87 = texts.text87,
  text88 = texts.text88,
  text89 = texts.text89,
  text90 = texts.text90,
  text91 = texts.text91,
  text92 = texts.text92,
  text93 = texts.text93,
  text94 = texts.text94,
  text95 = texts.text95,
}) => {
  const ref = useRef(null);
  const updateWidth = (width) => {
    if (ref.current) {
      ref.current.style.setProperty("--custom-width", `${width}px`);
    }
  };
  useEffect(() => {
    updateWidth(width);
    runAnimations();
  }, [ref]);

  return (
    <div className="wrapper-div-50148 " ref={ref}>
      <div className="pos-abs dashboard-50148">
        <div className="pos-abs dashboard-50175">
          <span className="dashboard-50175-0 ">{text1}</span>
        </div>
        <div className="pos-abs guideline-50176">
          <div className="nodeBg-50176 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>
        {/* Frame 8031 */}
        <section className="pos-abs frame-803-501942">
          <div className="pos-abs group-100000279-501943">
            <div className="pos-abs vector-501952">
              <div className="nodeBg-501952 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501944">
              <div className="nodeBg-501944 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501946">
              <div className="nodeBg-501946 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501945">
              <div className="nodeBg-501945 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501951">
              <div className="nodeBg-501951 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501948">
              <div className="nodeBg-501948 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501947">
              <div className="nodeBg-501947 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501950">
              <div className="nodeBg-501950 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501953">
              <div className="nodeBg-501953 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501949">
              <div className="nodeBg-501949 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
          <div className="pos-abs dashboard-501954">
            <span className="dashboard-501954-0 ">{text2}</span>
          </div>
        </section>
        {/* Todays Sales1 */}
        <section className="pos-abs todays-sales-501188">
          <div className="pos-abs today-sales-501189">
            <div className="pos-abs group-100000273-501247">
              <div className="pos-abs todays-sales-501248">
                <span className="todays-sales-501248-0 ">{text3}</span>
              </div>
              <div className="pos-abs sales-summary-501249">
                <span className="sales-summary-501249-0 ">{text4}</span>
              </div>
            </div>
            <div className="pos-abs exports-501238">
              <div className="pos-abs group-100000273-501239">
                <div className="pos-abs export-icon-501240">
                  <div className="pos-abs group-923-501242">
                    <div className="pos-abs frame-2608612-501244">
                      <div className="pos-abs union-501245">
                        <div className="nodeBg-501245 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className="pos-abs export-501246">
                        <span className="export-501246-0 ">{text5}</span>
                      </div>
                    </div>
                    <div className="pos-abs rectangle-854-501243"></div>
                  </div>
                  <div className="pos-abs rectangle-853-501241"></div>
                </div>
              </div>
            </div>
            <div className="pos-abs c-1-501226">
              <div className="pos-abs bg-501227"></div>
              <div className="pos-abs icon-501231">
                <div className="pos-abs ellipse-3-501232"></div>
                <div className="pos-abs sales-icon-501233">
                  <div className="pos-abs rectangle-839-501234"></div>
                  <div className="pos-abs group-916-501235">
                    <div className="pos-abs rectangle-840-501236"></div>
                    <div className="pos-abs subtract-501237">
                      <div className="nodeBg-501237 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs total-sales-501229">
                <span className="total-sales-501229-0 ">{text6}</span>
              </div>
              <div className="pos-abs c-1k-501230">
                <span className="c-1k-501230-0 ">{text7}</span>
              </div>
              <div className="pos-abs c-8-from-yesterda-501228">
                <span className="c-8-from-yesterda-501228-0 ">{text8}</span>
              </div>
            </div>
            <div className="pos-abs c-2-501216">
              <div className="pos-abs bg-501217"></div>
              <div className="pos-abs icon-501221">
                <div className="pos-abs ellipse-3-501222"></div>
                <div className="pos-abs order-icon-501223">
                  <div className="pos-abs rectangle-780-501224"></div>
                  <div className="pos-abs union-501225">
                    <div className="nodeBg-501225 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
              <div className="pos-abs total-orders-501219">
                <span className="total-orders-501219-0 ">{text9}</span>
              </div>
              <div className="pos-abs c-300-501220">
                <span className="c-300-501220-0 ">{text10}</span>
              </div>
              <div className="pos-abs c-5-from-yesterda-501218">
                <span className="c-5-from-yesterda-501218-0 ">{text11}</span>
              </div>
            </div>
            <div className="pos-abs c-3-501204">
              <div className="pos-abs bg-501205"></div>
              <div className="pos-abs icon-501209">
                <div className="pos-abs ellipse-3-501210"></div>
                <div className="pos-abs disc-icon-501211">
                  <div className="pos-abs rectangle-857-501212"></div>
                  <div className="pos-abs group-925-501213">
                    <div className="pos-abs rectangle-858-501214"></div>
                    <div className="pos-abs subtract-501215">
                      <div className="nodeBg-501215 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs products-sold-501207">
                <span className="products-sold-501207-0 ">{text12}</span>
              </div>
              <div className="pos-abs c-5-501208">
                <span className="c-5-501208-0 ">{text13}</span>
              </div>
              <div className="pos-abs c-12-from-yesterd-501206">
                <span className="c-12-from-yesterd-501206-0 ">{text14}</span>
              </div>
            </div>
            <div className="pos-abs c-4-501190">
              <div className="pos-abs bg-501191"></div>
              <div className="pos-abs icon-501195">
                <div className="pos-abs ellipse-3-501196"></div>
                <div className="pos-abs new-costumers-i-501197">
                  <div className="pos-abs rectangle-837-501198"></div>
                  <div className="pos-abs group-914-501199">
                    <div className="pos-abs rectangle-838-501200"></div>
                    <div className="pos-abs union-501201">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F06-jul-2024%2Ftanmaysharma1720288970025%2Fimage-501-201.png?alt=media&token=0"
                        className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                        alt="Union1 Image"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs new-customers-501193">
                <span className="new-customers-501193-0 ">{text15}</span>
              </div>
              <div className="pos-abs c-8-501194">
                <span className="c-8-501194-0 ">{text16}</span>
              </div>
              <div className="pos-abs c-05-from-yesterd-501192">
                <span className="c-05-from-yesterd-501192-0 ">{text17}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 7981 */}
        <section className="pos-abs frame-798-501936">
          <div className="pos-abs group-100000278-501937">
            <div className="pos-abs vector-501939">
              <div className="nodeBg-501939 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501940">
              <div className="nodeBg-501940 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501938">
              <div className="nodeBg-501938 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
          <div className="pos-abs products-501941">
            <span className="products-501941-0 ">{text18}</span>
          </div>
        </section>
        {/* Frame 7991 */}
        <section className="pos-abs frame-799-501955">
          <div className="pos-abs group-100000278-501956">
            <div className="pos-abs vector-501957">
              <div className="nodeBg-501957 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501958">
              <div className="nodeBg-501958 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
          <div className="pos-abs analytics-501959">
            <span className="analytics-501959-0 ">{text19}</span>
          </div>
        </section>
        <div className="pos-abs polygon-2-50167">
          <div className="nodeBg-50167 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>
        {/* Frame 8001 */}
        <section className="pos-abs frame-800-501960">
          <div className="pos-abs union-501961">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F06-jul-2024%2Ftanmaysharma1720288970025%2Fimage-501-961.png?alt=media&token=0"
              className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
              alt="Union1 Image"
            />{" "}
          </div>
          <div className="pos-abs customers-501970">
            <span className="customers-501970-0 ">{text20}</span>
          </div>
        </section>
        {/* Frame 8011 */}
        <section className="pos-abs frame-801-501971">
          <div className="pos-abs group-100000278-501972">
            <div className="pos-abs vector-501973">
              <div className="nodeBg-501973 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501975">
              <div className="nodeBg-501975 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501974">
              <div className="nodeBg-501974 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
          <div className="pos-abs profile-501976">
            <span className="profile-501976-0 ">{text21}</span>
          </div>
        </section>
        {/* Visitor Insights1 */}
        <section className="pos-abs visitor-insight-501250">
          <div className="pos-abs card--base-501251">
            <div className="pos-abs container-501252"></div>
          </div>
          <div className="pos-abs card-title-501253">
            <span className="card-title-501253-0 ">{text22}</span>
          </div>
          <div className="pos-abs axis-501254">
            <div className="pos-abs axis-501259"></div>
            <div className="pos-abs axis-501258"></div>
            <div className="pos-abs axis-501257"></div>
            <div className="pos-abs axis-501256"></div>
            <div className="pos-abs axis-501255"></div>
          </div>
          <div className="pos-abs c-400-501264">
            <span className="c-400-501264-0 ">{text23}</span>
          </div>
          <div className="pos-abs line-1-501285">
            <div className="nodeBg-501285 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
          <div className="pos-abs frame-10-501277">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F06-jul-2024%2Ftanmaysharma1720288970025%2Fimage-501-277.png?alt=media&token=0"
              className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
              alt="Frame 101 Image"
            />{" "}
          </div>
          <div className="pos-abs ellipse-40-501284"></div>
          <div className="pos-abs c-300-501263">
            <span className="c-300-501263-0 ">{text24}</span>
          </div>
          <div className="pos-abs c-200-501262">
            <span className="c-200-501262-0 ">{text25}</span>
          </div>
          <div className="pos-abs c-100-501261">
            <span className="c-100-501261-0 ">{text26}</span>
          </div>
          <div className="pos-abs c-0-501260">
            <span className="c-0-501260-0 ">{text27}</span>
          </div>
          <div className="pos-abs jan-501265">
            <span className="jan-501265-0 ">{text28}</span>
          </div>
          <div className="pos-abs feb-501266">
            <span className="feb-501266-0 ">{text29}</span>
          </div>
          <div className="pos-abs mar-501267">
            <span className="mar-501267-0 ">{text30}</span>
          </div>
          <div className="pos-abs apr-501268">
            <span className="apr-501268-0 ">{text31}</span>
          </div>
          <div className="pos-abs may-501269">
            <span className="may-501269-0 ">{text32}</span>
          </div>
          <div className="pos-abs jun-501270">
            <span className="jun-501270-0 ">{text33}</span>
          </div>
          <div className="pos-abs jun-501271">
            <span className="jun-501271-0 ">{text34}</span>
          </div>
          <div className="pos-abs jul-501272">
            <span className="jul-501272-0 ">{text35}</span>
          </div>
          <div className="pos-abs sept-501273">
            <span className="sept-501273-0 ">{text36}</span>
          </div>
          <div className="pos-abs oct-501274">
            <span className="oct-501274-0 ">{text37}</span>
          </div>
          <div className="pos-abs nov-501275">
            <span className="nov-501275-0 ">{text38}</span>
          </div>
          <div className="pos-abs des-501276">
            <span className="des-501276-0 ">{text39}</span>
          </div>
          <div className="pos-abs group-100000279-501286">
            <div className="pos-abs frame-2608613-501293">
              <div className="pos-abs rectangle-217-501294"></div>
              <div className="pos-abs loyal-customers-501295">
                <span className="loyal-customers-501295-0 ">{text40}</span>
              </div>
            </div>
            <div className="pos-abs frame-2608614-501290">
              <div className="pos-abs rectangle-217-501291"></div>
              <div className="pos-abs new-customers-501292">
                <span className="new-customers-501292-0 ">{text41}</span>
              </div>
            </div>
            <div className="pos-abs frame-2608615-501287">
              <div className="pos-abs rectangle-217-501288"></div>
              <div className="pos-abs unique-customer-501289">
                <span className="unique-customer-501289-0 ">{text42}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Target Vs Reality1 */}
        <section className="pos-abs target-vs-reali-501296">
          <div className="pos-abs target-501297">
            <div className="pos-abs cardteam-501298">
              <div className="pos-abs shape-501299"></div>
            </div>
          </div>
          <div className="pos-abs card-title-501300">
            <span className="card-title-501300-0 ">{text43}</span>
          </div>
          <div className="pos-abs group-100000276-501301">
            <div className="pos-abs group-100000278-501302">
              <div className="pos-abs group-100000277-501323">
                <div className="pos-abs group-100000277-501325">
                  <div className="pos-abs rectangle-205-501326"></div>
                  <div className="pos-abs rectangle-205-501327"></div>
                </div>
                <div className="pos-abs may-501324">
                  <span className="may-501324-0 ">{text44}</span>
                </div>
              </div>
              <div className="pos-abs group-100000277-501328">
                <div className="pos-abs group-100000277-501330">
                  <div className="pos-abs rectangle-206-501331"></div>
                  <div className="pos-abs rectangle-207-501332"></div>
                </div>
                <div className="pos-abs may-501329">
                  <span className="may-501329-0 ">{text45}</span>
                </div>
              </div>
              <div className="pos-abs group-100000277-501313">
                <div className="pos-abs group-100000277-501315">
                  <div className="pos-abs rectangle-203-501316"></div>
                  <div className="pos-abs rectangle-203-501317"></div>
                </div>
                <div className="pos-abs mar-501314">
                  <span className="mar-501314-0 ">{text46}</span>
                </div>
              </div>
              <div className="pos-abs group-100000278-501303">
                <div className="pos-abs group-100000278-501305">
                  <div className="pos-abs rectangle-201-501306"></div>
                  <div className="pos-abs rectangle-201-501307"></div>
                </div>
                <div className="pos-abs jan-501304">
                  <span className="jan-501304-0 ">{text47}</span>
                </div>
              </div>
              <div className="pos-abs group-100000278-501308">
                <div className="pos-abs group-100000278-501310">
                  <div className="pos-abs rectangle-202-501311"></div>
                  <div className="pos-abs rectangle-202-501312"></div>
                </div>
                <div className="pos-abs feb-501309">
                  <span className="feb-501309-0 ">{text48}</span>
                </div>
              </div>
              <div className="pos-abs group-100000277-501318">
                <div className="pos-abs group-100000277-501320">
                  <div className="pos-abs rectangle-204-501321"></div>
                  <div className="pos-abs rectangle-204-501322"></div>
                </div>
                <div className="pos-abs apr-501319">
                  <span className="apr-501319-0 ">{text49}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pos-abs group-100000275-501333">
            <div className="pos-abs avatar-501338">
              <div className="pos-abs rectangle-172-501339"></div>
              <div className="pos-abs boy-501340">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F06-jul-2024%2Ftanmaysharma1720288970025%2Fimage-501-340.png?alt=media&token=0"
                  className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                  alt="boy1 Image"
                />{" "}
              </div>
            </div>
            <div className="pos-abs group-100000273-501335">
              <div className="pos-abs reality-sales-501336">
                <span className="reality-sales-501336-0 ">{text50}</span>
              </div>
              <div className="pos-abs global-501337">
                <span className="global-501337-0 ">{text51}</span>
              </div>
            </div>
            <div className="pos-abs c-8823-501334">
              <span className="c-8823-501334-0 ">{text52}</span>
            </div>
          </div>
          <div className="pos-abs group-100000275-501350">
            <div className="pos-abs avatar-501355">
              <div className="pos-abs rectangle-172-501356"></div>
              <div className="pos-abs ticket-star-1-501357">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F06-jul-2024%2Ftanmaysharma1720288970025%2Fimage-501-357.png?alt=media&token=0"
                  className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                  alt="Ticket Star 11 Image"
                />{" "}
              </div>
            </div>
            <div className="pos-abs group-100000273-501352">
              <div className="pos-abs target-sales-501353">
                <span className="target-sales-501353-0 ">{text53}</span>
              </div>
              <div className="pos-abs commercial-501354">
                <span className="commercial-501354-0 ">{text54}</span>
              </div>
            </div>
            <div className="pos-abs c-12122-501351">
              <span className="c-12122-501351-0 ">{text55}</span>
            </div>
          </div>
        </section>
        {/* Frame 8021 */}
        <section className="pos-abs frame-802-501977">
          <div className="pos-abs group-100000279-501978">
            <div className="pos-abs vector-501980">
              <div className="nodeBg-501980 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs vector-501979">
              <div className="nodeBg-501979 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
          <div className="pos-abs settings-501981">
            <span className="settings-501981-0 ">{text56}</span>
          </div>
        </section>
        {/* Customer Satisfaction1 */}
        <section className="pos-abs customer-satisf-501368">
          <div className="pos-abs background--cop-501369"></div>
          <div className="pos-abs customer-satisf-501385">
            <span className="customer-satisf-501385-0 ">{text57}</span>
          </div>
          <div className="pos-abs group-17-501386">
            <div className="pos-abs oval-copy-7-501389"></div>
            <div className="pos-abs path-6-501387">
              <div className="nodeBg-501387 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs path-6-501388">
              <div className="nodeBg-501388 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs oval-copy-19-501395"></div>
            <div className="pos-abs oval-copy-15-501391"></div>
            <div className="pos-abs oval-copy-17-501393"></div>
            <div className="pos-abs oval-copy-18-501394"></div>
            <div className="pos-abs oval-copy-16-501392"></div>
            <div className="pos-abs oval-copy-14-501390"></div>
          </div>
          <div className="pos-abs group-16-501396">
            <div className="pos-abs oval-copy-12-501404"></div>
            <div className="pos-abs path-5-501397">
              <div className="nodeBg-501397 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs path-5-501398">
              <div className="nodeBg-501398 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs oval-copy-7-501399"></div>
            <div className="pos-abs oval-copy-13-501405"></div>
            <div className="pos-abs oval-copy-9-501401"></div>
            <div className="pos-abs oval-copy-8-501400"></div>
            <div className="pos-abs oval-copy-11-501403"></div>
            <div className="pos-abs oval-copy-10-501402"></div>
          </div>
          <div className="pos-abs rectangle-501370"></div>
          <div className="pos-abs group-100000275-501371">
            <div className="pos-abs group-100000274-501378">
              <div className="pos-abs last-month-501380">
                <span className="last-month-501380-0 ">{text58}</span>
              </div>
              <div className="pos-abs group-18-501381">
                <div className="pos-abs oval-copy-501383"></div>
                <div className="pos-abs path-4-501382">
                  <div className="nodeBg-501382 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
              <div className="pos-abs c-3004-501379">
                <span className="c-3004-501379-0 ">{text59}</span>
              </div>
            </div>
            <div className="pos-abs group-100000275-501372">
              <div className="pos-abs this-month-501374">
                <span className="this-month-501374-0 ">{text60}</span>
              </div>
              <div className="pos-abs group-18-copy-501375">
                <div className="pos-abs oval-copy-501377"></div>
                <div className="pos-abs path-4-501376">
                  <div className="nodeBg-501376 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
              <div className="pos-abs c-4504-501373">
                <span className="c-4504-501373-0 ">{text61}</span>
              </div>
            </div>
            <div className="pos-abs rectangle-501384"></div>
          </div>
        </section>
        {/* Total Revenue1 */}
        <section className="pos-abs total-revenue-501406">
          <div className="pos-abs background-501407"></div>
          <div className="pos-abs group-100000274-501408">
            <div className="pos-abs total-revenue-501409">
              <span className="total-revenue-501409-0 ">{text62}</span>
            </div>
            <div className="pos-abs group-100000274-501410">
              <div className="pos-abs group-100000274-501416">
                <div className="pos-abs c-25k-501423">
                  <span className="c-25k-501423-0 ">{text63}</span>
                </div>
                <div className="pos-abs path-2-copy-5-501422">
                  <div className="nodeBg-501422 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
                <div className="pos-abs c-20k-501424">
                  <span className="c-20k-501424-0 ">{text64}</span>
                </div>
                <div className="pos-abs path-2-copy-4-501421">
                  <div className="nodeBg-501421 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
                <div className="pos-abs c-15k-501426">
                  <span className="c-15k-501426-0 ">{text65}</span>
                </div>
                <div className="pos-abs path-2-copy-3-501420">
                  <div className="nodeBg-501420 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
                <div className="pos-abs c-10k-501425">
                  <span className="c-10k-501425-0 ">{text66}</span>
                </div>
                <div className="pos-abs path-2-copy-2-501419">
                  <div className="nodeBg-501419 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
                <div className="pos-abs c-5k-501427">
                  <span className="c-5k-501427-0 ">{text67}</span>
                </div>
                <div className="pos-abs path-2-copy-501417">
                  <div className="nodeBg-501417 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
                <div className="pos-abs c-0-501428">
                  <span className="c-0-501428-0 ">{text68}</span>
                </div>
                <div className="pos-abs path-2-501418">
                  <div className="nodeBg-501418 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
              <div className="pos-abs group-14-copy-2-501442">
                <div className="pos-abs rectangle-copy--501444"></div>
                <div className="pos-abs rectangle-copy--501443"></div>
              </div>
              <div className="pos-abs group-14-copy-6-501454">
                <div className="pos-abs rectangle-copy--501455"></div>
                <div className="pos-abs rectangle-copy--501456"></div>
              </div>
              <div className="pos-abs group-14-copy-501439">
                <div className="pos-abs rectangle-copy--501440"></div>
                <div className="pos-abs rectangle-copy--501441"></div>
              </div>
              <div className="pos-abs group-14-copy-5-501451">
                <div className="pos-abs rectangle-copy--501452"></div>
                <div className="pos-abs rectangle-copy--501453"></div>
              </div>
              <div className="pos-abs group-14-copy-3-501445">
                <div className="pos-abs rectangle-copy--501446"></div>
                <div className="pos-abs rectangle-copy--501447"></div>
              </div>
              <div className="pos-abs group-14-501436">
                <div className="pos-abs rectangle-copy--501437"></div>
                <div className="pos-abs rectangle-copy--501438"></div>
              </div>
              <div className="pos-abs group-14-copy-4-501448">
                <div className="pos-abs rectangle-copy--501449"></div>
                <div className="pos-abs rectangle-copy--501450"></div>
              </div>
              <div className="pos-abs monday-501429">
                <span className="monday-501429-0 ">{text69}</span>
              </div>
              <div className="pos-abs tuesday-501430">
                <span className="tuesday-501430-0 ">{text70}</span>
              </div>
              <div className="pos-abs wednesday-501431">
                <span className="wednesday-501431-0 ">{text71}</span>
              </div>
              <div className="pos-abs thursday-501432">
                <span className="thursday-501432-0 ">{text72}</span>
              </div>
              <div className="pos-abs friday-501433">
                <span className="friday-501433-0 ">{text73}</span>
              </div>
              <div className="pos-abs saturday-501434">
                <span className="saturday-501434-0 ">{text74}</span>
              </div>
              <div className="pos-abs sunday-501435">
                <span className="sunday-501435-0 ">{text75}</span>
              </div>
              <div className="pos-abs group-2-501411">
                <div className="pos-abs online-sales-501412">
                  <span className="online-sales-501412-0 ">{text76}</span>
                </div>
                <div className="pos-abs offline-sales-501414">
                  <span className="offline-sales-501414-0 ">{text77}</span>
                </div>
                <div className="pos-abs rectangle-copy--501413"></div>
                <div className="pos-abs rectangle-copy--501415"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Top Products1 */}
        <section className="pos-abs top-products-50184">
          <div className="pos-abs background-50185"></div>
          <div className="pos-abs top-products-50195">
            <span className="top-products-50195-0 ">{text78}</span>
          </div>
          <div className="pos-abs group-100000274-50186">
            <div className="pos-abs group-100000274-50187">
              <div className="pos-abs div-50188">
                <span className="div-50188-0 ">{text79}</span>
              </div>
              <div className="pos-abs name-copy-50189">
                <span className="name-copy-50189-0 ">{text80}</span>
              </div>
              <div className="pos-abs popularity-50190">
                <span className="popularity-50190-0 ">{text81}</span>
              </div>
              <div className="pos-abs sales-50191">
                <span className="sales-50191-0 ">{text82}</span>
              </div>
            </div>
            <div className="pos-abs c-02-ui-elements6-50192">
              <div className="pos-abs rectangle-I50192_0281"></div>
            </div>
          </div>
          <div className="pos-abs group-6-50196">
            <div className="pos-abs group-4-50199">
              <div className="pos-abs rectangle-501100"></div>
              <div className="pos-abs c-32-501101">
                <span className="c-32-501101-0 ">{text83}</span>
              </div>
            </div>
            <div className="pos-abs c-01-50198">
              <span className="c-01-50198-0 ">{text84}</span>
            </div>
            <div className="pos-abs home-decor-rang-50197">
              <span className="home-decor-rang-50197-0 ">{text85}</span>
            </div>
            <div className="pos-abs group-5-501102">
              <div className="pos-abs rectangle-501103"></div>
              <div className="pos-abs rectangle-501104"></div>
            </div>
          </div>
          <div className="pos-abs c-02-ui-elements6-50193">
            <div className="pos-abs rectangle-50194"></div>
          </div>
          <div className="pos-abs group-6-copy-501105">
            <div className="pos-abs group-4-501108">
              <div className="pos-abs rectangle-501109"></div>
              <div className="pos-abs c-20-501110">
                <span className="c-20-501110-0 ">{text86}</span>
              </div>
            </div>
            <div className="pos-abs c-02-501107">
              <span className="c-02-501107-0 ">{text87}</span>
            </div>
            <div className="pos-abs disney-princess-501106">
              <span className="disney-princess-501106-0 ">{text88}</span>
            </div>
            <div className="pos-abs group-5-501111">
              <div className="pos-abs rectangle-501112"></div>
              <div className="pos-abs rectangle-501113"></div>
            </div>
          </div>
          <div className="pos-abs c-02-ui-elements6-501114">
            <div className="pos-abs rectangle-501115"></div>
          </div>
          <div className="pos-abs group-6-copy-2-501116">
            <div className="pos-abs group-4-501119">
              <div className="pos-abs rectangle-501120"></div>
              <div className="pos-abs c-15-501121">
                <span className="c-15-501121-0 ">{text89}</span>
              </div>
            </div>
            <div className="pos-abs c-03-501118">
              <span className="c-03-501118-0 ">{text90}</span>
            </div>
            <div className="pos-abs bathroom-essent-501117">
              <span className="bathroom-essent-501117-0 ">{text91}</span>
            </div>
            <div className="pos-abs group-5-501122">
              <div className="pos-abs rectangle-501123"></div>
              <div className="pos-abs rectangle-501124"></div>
            </div>
          </div>
          <div className="pos-abs c-02-ui-elements6-501125">
            <div className="pos-abs rectangle-501126"></div>
          </div>
          <div className="pos-abs group-6-copy-3-501127">
            <div className="pos-abs group-4-501130">
              <div className="pos-abs rectangle-501131"></div>
              <div className="pos-abs c-30-501132">
                <span className="c-30-501132-0 ">{text92}</span>
              </div>
            </div>
            <div className="pos-abs c-04-501129">
              <span className="c-04-501129-0 ">{text93}</span>
            </div>
            <div className="pos-abs apple-smartwatc-501128">
              <span className="apple-smartwatc-501128-0 ">{text94}</span>
            </div>
            <div className="pos-abs group-5-501133">
              <div className="pos-abs rectangle-501134"></div>
              <div className="pos-abs rectangle-501135"></div>
            </div>
          </div>
        </section>
        {/* Sales Mapping1 */}
        <section className="pos-abs sales-mapping-501457">
          <div className="pos-abs container-501934"></div>
          <div className="pos-abs card--base-501458">
            <div className="pos-abs card--base-back-501459"></div>
            <div className="pos-abs container-501460"></div>
          </div>
          <div className="pos-abs card-title-501935">
            <span className="card-title-501935-0 ">{text95}</span>
          </div>
          <div className="pos-abs world-1-501461">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F06-jul-2024%2Ftanmaysharma1720288970025%2Fimage-501-461.png?alt=media&token=0"
              className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
              alt="world 11 Image"
            />{" "}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Component;
