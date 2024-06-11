import React from "react";
import CommentCard from "./Cards/CommentCard";


const VideoPlayer = () => {
  return (
    <div className="overflow-y-scroll max-h-[90vh] my-2 mx-1">
      <div className="border border-gray-400 rounded-lg overflow-hidden my-1 max-w-screen-md">
        <img
          className="max-w-screen-md"
          src="https://s3-alpha-sig.figma.com/img/49ab/0035/2db2309bcb3f25016e3fca4ddb9921da?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fSa9w6TN6R-~lfAxXlh1wW-pYQIvrTEspwJB2-G4J0sNQCj9DLRpPJ9DHX5BNa5rskyzRK6W6b~fADxcwzuLEzLOnxB4W67OpyUJFSfYfovyBenZ3oRp~K2HUkOZ9LXBwp17TrgJ8wyxOfe0E5CI78~3pXaW36HEmK2ANIgzXR-Fm427EoGAdPRBuEVrqKmthR1mpW9oqW2d5S0TM4lMdJhLGk3CqFvsVJGJxWC0UDBUxZXX1WlFeLeW10slN2RSAm2WhtbHqlvfV~LNEu2XLswIg7ZXAwLfMa2QU9x2hnUPNkvbwwhU8IqWvjaTv4gxx32cqNor8SV6L2Akb-r8Aw__"
          alt=""
        />
      </div>
      <div className="border border-gray-400 rounded-lg my-2">
        <div className="mx-4 flex justify-between items-center my-1 text-wrap">
          <div className="text-xl">Lex Fridman plays Red Dead Redemption 2</div>
          <div className="flex gap-4">
            <div className="border border-white rounded-md py-1 px-2">
              <button className="mx-2 text-md">Like</button>
              <button className="text-md">Dislike</button>
            </div>
            <div>
              <button className="bg-white text-black px-2 py-1 text-md">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="mx-4 my-1 font-thin text-sm">
          109,067 Views . 18 hours ago
        </div>
        <div className="mx-4 flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <div>Logo</div>
            <div>
              <div className="font-normal text-sm">Lex Fridman</div>
              <div className="font-thin text-sm">705k Followers</div>
            </div>
          </div>
          <div>
            <button className="bg-[#AE7AFF] px-2 py-1 text-md">Follow</button>
          </div>
        </div>
        <div className="mx-4 my-4 flex justify-between items-center">
          <div>
            <hr />
            <div className="max-w-xl text-sm">
              TimUrban is the author of the blog Wait But Why and a new book
              What's Our Problem?: A Self-Help Book...
            </div>
          </div>
          <div>
            <button>^</button>
          </div>
        </div>
      </div>
      <div className="py-4 border border-gray-400 rounded-lg overflow-hidden">
        <div className="mx-4 text-sm font-normal">5043 Comments</div>
        <div className="mx-4 py-4 w-full">
          <input
            className="border rounded-md border-white bg-black text-white py-1 px-2 text-sm font-thin w-[95%]"
            placeholder="Add Comment"
            type="text"
          />
        </div>
        <div className="mx-4">
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
