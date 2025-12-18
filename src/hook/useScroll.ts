import { useLenis } from "@/utils/lenis";

export function useScroll() {
    const lenis = useLenis();

    return {
        to: (id: string) => lenis?.scrollTo(`#${id}`),
        top: () => lenis?.scrollTo(0),
    };
}
