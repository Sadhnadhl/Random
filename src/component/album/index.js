import React from "react";
import { useDispatch } from "react-redux";
import { fetchAlbumRequest } from "../../redux/actions/album";

const Album = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchAlbumRequest());
        }}
      >
        Get Somethikng
      </button>
    </div>
  );
};

export default Album;
