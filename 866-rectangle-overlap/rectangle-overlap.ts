function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    if (rec2[1] >= rec1[3] || rec2[0] >= rec1[2]) return false;

    return (rec2[3] >rec1[1] && rec2[2] > rec1[0]) ? true : false ;


};