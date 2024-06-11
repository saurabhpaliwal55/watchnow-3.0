import React from "react";
import ProfileVideoCard from "./Cards/ProfileVideoCard";

const ProfileVideo = () => {
  return (
    <div className="overflow-y-scroll">
      <div>
        <div className="overflow-hidden">
          <img
            className="h-60 w-screen"
            src="https://www.figma.com/file/shmxWL5FKRO5GNOPPopBg6/image/ef16f0d92c7cec71ed9a0c43958b1f81839da4b1"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center mx-10">
          <div className="flex gap-5 justify-center items-center">
            <div className="overflow-hidden">
              <img
                className="w-32 h-32 border border-white rounded-full"
                src="https://s3-alpha-sig.figma.com/img/17aa/68bc/24614a4c0319bf3249399e3392a337c4?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YH1X7yuv4YahKOKx8Bz6L9iqK3eOPWHTcCbNF21c2Oxv-CRc23BIkys6l8p2XzxEfKkfgMGCY0N7O5mG53ibsS5Nk8TNzYz9OiMs0goAxJVyA9S4RgIEb1~97L5WJsjMvjF2-714-O5wTDkmE1r5QYl69WN9o0dydSgOak3a7RKdhbSAtF0m-Q39xKokgYn6uDuvp98Y7RhAxGlzLVaMazOcJbYpX-Tj-9q9VZqQOL7YRUk1fnzFCCUrKhhFlDhs-2UGfiYkeEw-YgdGGdb~nbln0SUtyKCAQmLKGqsXbtIdFUtm19jcQMt0xZFpfcACvxhzrqMlgkp6n0B4EVgXCw__"
                alt=""
              />
            </div>
            <div>
              <div className="text-2xl">Yash Mittal</div>
              <div className="text-sm font-thin my-1">@YashMittal</div>
              <div className="text-sm font-thin">
                600k Suscribers . 220 Subscribed
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[#AE7AFF] px-2 py-1 text-md text-black">
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className="mx-5 my-5">
        <div className="flex justify-between items-center text-center mb-2">
          <div className="text-center border border-white w-full py-2 text-sm cursor-pointer ">Videos</div>
          <div className="text-center border border-white w-full py-2 text-sm cursor-pointer">Playlist</div>
          <div className="text-center border border-white w-full py-2 text-sm cursor-pointer">Tweets</div>
          <div className="text-center border border-white w-full py-2 text-sm cursor-pointer">Following</div>
        </div>
        <hr />
        <div className="flex flex-wrap overflow-y-scroll max-h-[90vh] my-2">
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
        </div>
      </div>
    </div>
  );
};

export default ProfileVideo;
