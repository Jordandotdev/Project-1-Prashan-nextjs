import React from 'react';
import Image from 'next/image';
import AlbumArt1 from '../../../../public/Albumart1.jpg';

const AudioPlayer = () => {
  return (
      <div className='mt-5 flex lg-w-8/12 bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
        <div className="flex flex-col w-full">
            <div className="flex p-5 border-b">
            <Image className='w-20 h-20 object-cover' alt='User avatar' src={AlbumArt1}/>
                <div className="flex flex-col px-2 w-full">
                    <span className="text-sm text-gold capitalize font-semibold pt-1">
                       Mystique Forest 2 
                    </span>
                    <span className="text-xs text-gray-500 uppercase font-medium ">
                         Nuwan Gunawardhana
                    </span>
                </div>
            </div>
           
            
            <div className="flex flex-col p-5">
                <a href='https://youtu.be/_H7dlHRRD20'>
                    <div className="flex border-b py-3 cursor-pointer hover:shadow-md px-2 ">
                        <iframe className='w-10 h-10' src="https://www.youtube.com/embed/_H7dlHRRD20" title="Little Sunflower Trumpet solo by Freddie Hubbard" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div className="flex flex-col px-2 w-full">
                            
                            <span className="text-sm text-gold capitalize font-semibold pt-1">
                            Little Sunflower Trumpet solo    
                            </span>
                            <span className="text-xs text-gray-500 uppercase font-medium ">
                            Freddie Hubbard - Horns with Nuwan
                            </span>
                        </div>
                    </div>
                </a>
                 <div className="flex border-b py-3 cursor-pointer hover:shadow-md px-2 ">
                    <Image  className='w-10 h-10 object-cover rounded-lg' alt='User avatar'src={AlbumArt1}/>
                    <div className="flex flex-col px-2 w-full">
                        
                        <span className="text-sm text-gold capitalize font-semibold pt-1">
                        Mystique Forest 2    
                        </span>
                        <span className="text-xs text-gray-500 uppercase font-medium ">
                             Nuwan Gunawardhana
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AudioPlayer;