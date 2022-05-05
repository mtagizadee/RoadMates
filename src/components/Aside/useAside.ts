import { ShortProfile } from "../../types";

const useAside = (): ReturnType => {
    const profiles: ShortProfile[] = [
        { nickname: 'MT', rating: 3, avatar: require('../../assets/images/1137727.jpg') },
        { nickname: 'MT', rating: 3, avatar: require('../../assets/images/1197822.png') }
    ];
    
    return { profiles }
}

type ReturnType = {
    profiles: ShortProfile[];
}

export default useAside;