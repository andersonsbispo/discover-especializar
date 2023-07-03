function useState<T extends string | number = string>() {
    let state: T;

    function get() {
        return state;
    }

    function set(newValue: T) {
        state = newValue;
    }

    return {get, set};
}

let newState = useState<number>();
newState.get();
newState.set("Anderson");
newState.set(123);