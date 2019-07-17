import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  files: any = [
    // tslint:disable-next-line: max-line-length
    {
      url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
      name: 'Perfect',
      artist: ' Ed Sheeran',
      image: 'https://i.ytimg.com/vi/dyaXX_biV8k/maxresdefault.jpg'
    },
    {
      // tslint:disable-next-line: max-line-length
      url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      name: 'Man Atkeya Beparwah',
      artist: 'Nusrat Fateh Ali Khan',
      image: 'https://i.ytimg.com/vi/iqKrKnfTrQk/maxresdefault.jpg'
    },
    {
      url: 'http://friendstamilmp3.net/Filesystem/A-Z%20Movie%20Songs/Nerkonda%20Paarvai%20(2019)//Vaanil%20Irul%20Soozhum%20Pothu.mp3',
      name: 'Vaanil Irul Soozhum Pothu.',
      artist: 'Dee',
      image: 'http://friendstamilmp3.net/Filesystem/A-Z%20Movie%20Songs/Nerkonda%20Paarvai%20(2019)/Folder.jpg'
    },
    {
      url: 'http://friendstamilmp3.net/Filesystem/A-Z%20Movie%20Songs/Sarkar/Bulti%20Bakkara%20(Nikkal%20Pikkalu)%20Simtaangaran.mp3.mp3',
      name: 'Bulti Bakkara (Nikkal Pikkalu) Simtaangaran',
      artist: 'Aparna Narayanan, Vipin Aneja, Bamba Bakya ',
      image: 'http://friendstamilmp3.net/Filesystem/A-Z%20Movie%20Songs/Sarkar/Folder.jpg'
    },
    {
      url: 'http://friendstamilmp3.net/Filesystem/A-Z%20Movie%20Songs/Sarkar//CEO%20In%20The%20House%20(I%20Want%20To%20Rock%20Like%20A).mp3',
      name: 'CEO In The House (I Want To Rock Like A)',
      artist: 'Abhyankar, Blaaze ',
      image: 'http://friendstamilmp3.net/Filesystem/A-Z%20Movie%20Songs/Sarkar/Folder.jpg'
    },
    {
      url: 'http://friendstamilmp3.net/Filesystem/A-Z%20Movie%20Songs/Sarkar//Nethuvara%20Yemali%20(Oru%20Viral%20Puratchiye).mp3.mp3',
      name: 'Nethuvara Yemali (Oru Viral Puratchiye)',
      artist: 'Srinidhi Venkatesh, A.R. Rahman ',
      image: 'http://friendstamilmp3.net/Filesystem/A-Z%20Movie%20Songs/Sarkar/Folder.jpg'
    },
    {
      url: 'http://friendstamilmp3.net/Filesystem/A-Z%20Movie%20Songs/Sarkar//Oh%20Kangalaa%20(OMG%20Ponnu%20ILY%20Kannu).mp3',
      name: 'Oh Kangalaa (OMG Ponnu ILY Kannu)',
      artist: 'Jonita Gandhi, Sid Sriram ',
      image: 'http://friendstamilmp3.net/Filesystem/A-Z%20Movie%20Songs/Sarkar/Folder.jpg'
    },
    {
      url: 'http://friendstamilmp3.net/Filesystem/A-Z%20Movie%20Songs/Sarkar//Right%20Polam%20Right%20(Top%20Tucker%20Sharp%20Looker).mp3',
      name: 'Right Polam Right (Top Tucker Sharp Looker)',
      artist: 'Mohit Chauhan ',
      image: 'http://friendstamilmp3.net/Filesystem/A-Z%20Movie%20Songs/Sarkar/Folder.jpg'
    },

  ];

  getFiles() {
    return of(this.files);
  }
}