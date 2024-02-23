import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "../../components";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white-A700 flex flex-col font-inter gap-[50px] items-center justify-start mx-auto w-full">
      <header className="flex items-center justify-center md:px-5 w-full">
        <div className=" bg-bluegray-900 flex flex-row items-center justify-center p-[26px] sm:px-5 w-full ">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[94%]">
            <Text
              className="text-4xl smd:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.50px]"
            >
                News
            </Text>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
