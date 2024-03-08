import React from 'react';

export const Input = () => {
  return (
    <div class="input h-12 bg-white px-4 flex items-center justify-between">
      <input type="text" placeholder='Type here...' />
      <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs " />
      <button className="w-20 h-2 ml-2 btn btn-primary ">Post</button>
    </div>
  );
};

export default Input;
