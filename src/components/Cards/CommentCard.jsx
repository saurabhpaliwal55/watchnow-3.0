import React from "react";

const CommentCard = () => {
  return (
    <div>
      <hr />
      <div className="flex gap-2 my-2">
        <div>Logo</div>
        <div>
          <div>
            <div className="flex gap-2 text-center content-center justify-center">
              <div className="text-sm">Phoenix Baker</div>
              <div className="text-[12px] font-thin">Just Now</div>
            </div>
            <div className="text-sm font-normal">@Phoenix</div>
          </div>
          <div className="text-md font-normal">Looks Good!</div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
