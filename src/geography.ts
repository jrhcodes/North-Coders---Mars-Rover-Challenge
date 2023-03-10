import {Box, Point} from "./geometry";

export const GEOLOGY_ERROR = {
    BASIC_PLATEAU_NEGATIVE_COORDS: "Basic plateau requires positive coordinates."
};
type ObstacleType = "Debris" | "Cliff" | "Chasm";

export class Obstacle {
    x: number;
    y: number;
    type: ObstacleType;

    constructor( location: Point, type: ObstacleType ) {
        this.x = location.x;
        this.y = location.y;
        this.type = type;
    }
}

export class Terrain {

    obstacles: Set<Obstacle>;
    boundingBox: Box;

    constructor( boundingBox : Box, obstacles : Obstacle[] ) {
        this.obstacles = new Set(obstacles);
        this.boundingBox = boundingBox.copy();
    }

    addObstacle( location:Point, type: ObstacleType) {
        this.obstacles.add(new Obstacle(new Point(location.x, location.y) , type))
    }
}

export class BasicPlateau extends Terrain {
    constructor ( maxx: number, maxy:number ) {
        if( maxx <1 || maxy <1) throw new Error(GEOLOGY_ERROR.BASIC_PLATEAU_NEGATIVE_COORDS);

        super(new Box(new Point(0,0), new Point(maxx, maxy)), []);
    }
}