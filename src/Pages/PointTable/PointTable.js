import React from "react";
import argentina from "../../assets/flag/argentina.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
const PointTable = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold uppercase mt-10">
        Point Table
      </h1>
      <div className="mt-10">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper w-11/12"
        >
          <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="overflow-x-auto w-full ">
                <SwiperSlide>
                  <table class="table w-full">
                    <thead>
                      <tr>
                        <th className="text-2xl">Group A</th>
                        <th>Mp</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>+/-</th>
                        <th>PTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="flex items-center space-x-3">
                            <div class="avatar">
                              <div class="mask mask-squircle w-12 h-12">
                                <img src={argentina} alt="" />
                              </div>
                            </div>
                            <div>
                              <div class="font-bold">Argentina</div>
                            </div>
                          </div>
                        </td>

                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          <div class="flex items-center space-x-3">
                            <div class="avatar">
                              <div class="mask mask-squircle w-12 h-12">
                                <img src={argentina} alt="" />
                              </div>
                            </div>
                            <div>
                              <div class="font-bold">Argentina</div>
                            </div>
                          </div>
                        </td>

                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          <div class="flex items-center space-x-3">
                            <div class="avatar">
                              <div class="mask mask-squircle w-12 h-12">
                                <img src={argentina} alt="" />
                              </div>
                            </div>
                            <div>
                              <div class="font-bold">Argentina</div>
                            </div>
                          </div>
                        </td>

                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          <div class="flex items-center space-x-3">
                            <div class="avatar">
                              <div class="mask mask-squircle w-12 h-12">
                                <img src={argentina} alt="" />
                              </div>
                            </div>
                            <div>
                              <div class="font-bold">Argentina</div>
                            </div>
                          </div>
                        </td>

                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </SwiperSlide>
                <SwiperSlide>
                  <table class="table w-full">
                    <thead>
                      <tr>
                        <th className="text-2xl">Group A</th>
                        <th>Mp</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>+/-</th>
                        <th>PTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="flex items-center space-x-3">
                            <div class="avatar">
                              <div class="mask mask-squircle w-12 h-12">
                                <img src={argentina} alt="" />
                              </div>
                            </div>
                            <div>
                              <div class="font-bold">Argentina</div>
                            </div>
                          </div>
                        </td>

                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          <div class="flex items-center space-x-3">
                            <div class="avatar">
                              <div class="mask mask-squircle w-12 h-12">
                                <img src={argentina} alt="" />
                              </div>
                            </div>
                            <div>
                              <div class="font-bold">Argentina</div>
                            </div>
                          </div>
                        </td>

                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          <div class="flex items-center space-x-3">
                            <div class="avatar">
                              <div class="mask mask-squircle w-12 h-12">
                                <img src={argentina} alt="" />
                              </div>
                            </div>
                            <div>
                              <div class="font-bold">Argentina</div>
                            </div>
                          </div>
                        </td>

                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          <div class="flex items-center space-x-3">
                            <div class="avatar">
                              <div class="mask mask-squircle w-12 h-12">
                                <img src={argentina} alt="" />
                              </div>
                            </div>
                            <div>
                              <div class="font-bold">Argentina</div>
                            </div>
                          </div>
                        </td>

                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                        <th>
                          <p>0</p>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </SwiperSlide>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default PointTable;
