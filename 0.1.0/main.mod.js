import { MixinType, PolyMod, } from "https://cdn.polymodloader.com/cb/polytrackmods/PolyModLoader/0.6.0/PolyTypes.js";
class ViewfinderMod extends PolyMod {
    constructor() {
        super(...arguments);
        this.hwadzcam = true;
        this.preInit = (pml) => {
            if (this.hwadzcam === true) {
                pml.registerGlobalMixin({
                    type: MixinType.REPLACEBETWEEN,
                    tokenStart: `const r = new c.Pq0(0, 1, 0);`,
                    tokenEnd: {
                        token: `get camera() {`,
                        occ: 3,
                    },
                    func: `
                    if(ActivePolyModLoader.getMod("viewfinder").hwadzcam) {
                        const r = new c.Pq0(0, 2, -5);
                        (0, l.gn)(this, y, "f")
                            .position.copy(t)
                            .add(r.applyQuaternion(n)
                        );
                        (0, l.gn)(this, y, "f")
                        .quaternion.copy(n)
                        .multiply(
                            new c.PTz().setFromEuler(
                                new c.O9p(0, Math.PI, 0),
                            ),
                        );
                        (0, l.gn)(this, y, "f").updateMatrix();
                    } else {
                        const r = new c.Pq0(0, 1, 0);
                        r.applyQuaternion(n);
                    const a = Math.min(1, 5 * e);
                                (0, l.gn)(this, w, "f").set(
                      a * r.x + (1 - a) * (0, l.gn)(this, w, "f").x,
                      a * r.y + (1 - a) * (0, l.gn)(this, w, "f").y,
                      a * r.z + (1 - a) * (0, l.gn)(this, w, "f").z,
                    );
                    const s = new c.Pq0().subVectors(t, (0, l.gn)(this, b, "f"));
                    s.normalize();
                    const o = 5.5,
                      h = 1.8 / Math.min((0, l.gn)(this, y, "f").zoom, 2);
                    (((0, l.gn)(this, y, "f").position.x =
                      t.x - s.x * o + 2 * (0, l.gn)(this, w, "f").x),
                      ((0, l.gn)(this, y, "f").position.y = Math.max(
                        0.25,
                        t.y - s.y * o + 2 * (0, l.gn)(this, w, "f").y,
                      )),
                      ((0, l.gn)(this, y, "f").position.z =
                        t.z - s.z * o + 2 * (0, l.gn)(this, w, "f").z),
                      (0, l.gn)(this, y, "f").lookAt(
                        t.x + (0, l.gn)(this, w, "f").x * h,
                        t.y + (0, l.gn)(this, w, "f").y * h,
                        t.z + (0, l.gn)(this, w, "f").z * h,
                      ),
                      (0, l.gn)(this, y, "f").updateMatrix(),
                      (0, l.gn)(this, b, "f").set(
                        t.x - s.x * o,
                        t.y - s.y * o,
                        t.z - s.z * o,
                      ));
                            }
                        }
                        get camera() {
                        `,
                });
            }
            /*         pml.registerGlobalMixin({
                type: MixinType.REPLACEBETWEEN,
                tokenStart: "const r = new c.Pq0(0, 1, 0);",
                tokenEnd: "const r = new c.Pq0(0, 1, 0);",
                func: `
                    console.log("mod does stuff");
                    const r = new c.Pq0(3, -2, 2);
                `,
            }); */
        };
        this.init = (pml) => {
            pml.registerSettingCategory("Viewfinder settings");
            pml.registerBindCategory("Viewfinder keybinds");
            pml.registerKeybind("Toggle hwadz cam", "hwadzcam", "keydown", "", null, () => {
                this.hwadzcam = !this.hwadzcam;
            });
        };
    }
}
export let polyMod = new ViewfinderMod();
