import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiNestjs, SiMysql, SiExpress } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <div className="my-20 text-center text-4xl">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-7xl" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiRedis className="text-7xl text-red-700" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl text-sky-700" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNestjs className="text-7xl text-red-700" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-sky-700" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-7xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
