export default class Song {
constructor({ id,songname,alname,singername,mvid,interval,img,url }){
        this.id = id
        this.songname = songname
        this.alname = alname
        this.singername = singername
        this.mvid = mvid
        this.interval = interval
        this.img = img
        this.url = url
    }
}



export function createSong(item){
    return new Song ({
        id:item.id,
        songname : item.name,
        alname : item.al.name,
        singername : sinname(item.ar),
        mvid:item.mv,
        interval : item.dt,
        img:item.al.picUrl,
        url : ` https://music.163.com/song/media/outer/url?id=${item.id}.mp3`
    })
}

function sinname(singer){
    let ret = []
    if(!singer){
        return 
    }
    singer.forEach((element)=>{
        ret.push(element.name)
    })

    ret = ret.join('/')

    return ret
}