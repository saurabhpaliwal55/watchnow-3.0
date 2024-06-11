import React from "react";

const RecommendCard = () => {
  return (
    <div className="flex gap-1 border border-sm-white rounded-sm overflow-hidden mb-2">
      <div>
        <img
          className="max-w-[8.5rem]"
          src="https://s3-alpha-sig.figma.com/img/a991/0a3d/12dddf9db18e2504852f863a82957bb8?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hIZLY4IteZphQj1WVMqLj0NhbOpQpn7~vRdtLcc4gfAbqBZrd3LRuQH0wisnaqqhKIDdsuuY2VWUxK8QHiaRPW~PIjm272uEAjXaTBLggFBbvK12WIppdekaugbwuGXtDD0WmULb9ZUXm96Ebkg1anmINlrzE4413IYoxpDiJm7Dft40Jv0yjzrVIlb1L7G3ClDbHLo1NSKMGi5J9ZMY0AJiJD1yVpElHhGxA29pKPNuMDa1d8zdtvHH0brCq46EL~-y9WK9dUGefhFfrFzCIuYJKJgktiCWi7V8VmbBBNwCIt~xAd5H3tb43pfcdKpqwO0lm56ctqwWiuViiIV~Mw__"
          alt=""
        />
      </div>
      <div className="text-wrap flex flex-col justify-between mx-2 mb-2">
        <div className="text-md">How does a browser work?</div>
        <div>
          <div className="text-sm font-thin"> Maluma</div>
          <div className="text-sm font-thin">100k Views . 18 hours ago</div>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
