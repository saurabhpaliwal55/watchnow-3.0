import React from "react";

const DashboardCard = () => {
  return (
    <tr className="border-t-2 border-white">
      <td className="p-3">
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="relative w-11 h-6 bg-gray-200 -z-10 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        </label>
      </td>
      <td>Published</td>
      <td className="flex p-2">
        <div>
          <img
          className="w-16 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/2e79/58d5/40295bb8727fe7e58a262df037d35b3a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YJrp6~gqIYFA7uvxHq1-8Vl-zL22BloDqTP~2zNAC5rgOXDsuKCQYWdI9zVgvvRymU5WYKpu5ncjLJpTR0hyQsukr3~jP-aqhg3nGX3qcT~VeK5ANIUlIQa0rWD5bnR9UCoS99MY4IkoK~qEbG1ehUrohtKQALRaxinF48brZTENZ9ZjFgEjje1T3gzVqQPJ-lIOpZBrbXGq7INOAVVJepce-SYlpWAqfX2znPbxfcXFIdxt5sq5izuQgYE-21qi4-SJaJyeBjMgQVh1P2L4bivMLams3wEfjueVjjcsAQVXJHPghzJNN5xH0rKZpajjDdTUjsGIpOXwKZkfDpEtmA__"
            alt=""
          />
        </div>
        <div className="text-sm">
          Cardi B - WAP feat. Megan Thee Stallion [Official Video]
        </div>
      </td>
      <td className="bg-white">
        <div className="flex gap-1 text-center items-center justify-center bg-white">
          <div className="text-[10px] font-semibold bg-green-100 text-green-600 py-1 px-2 rounded-full">
            367 Likes
          </div>
          <div className="text-[10px] font-semibold bg-red-100 text-red-600 py-1 px-2 rounded-full">
            4767 Dislikes
          </div>
        </div>
      </td>
      <td>9/23/16</td>
      <td>
        <div className="cursor-pointer">
          <span className="material-symbols-outlined mr-1">delete</span>
          <span className="material-symbols-outlined">edit</span>
        </div>
      </td>
    </tr>
  );
};

export default DashboardCard;
