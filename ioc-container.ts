
export class IoCContainer {
    private static _instance: IoCContainer = new IoCContainer();
    private _dependencies: {[key: string]: Object} = {};

    private constructor() {
        if(IoCContainer._instance) {
            throw new Error("Singleton class, cannot instantiate using new")
        }
        IoCContainer._instance = this;
    }

    public static get instance(): IoCContainer {
        return IoCContainer._instance;
    }

    bindService(name: string, dependencies: string[], implementation: any) {
        if(this._dependencies[name]) {
            throw new Error("Dependency already bind")
        }
        let dependenciesImplementations = this.getDependenciesImplementations(dependencies);
        this._dependencies[name] = new implementation(...dependenciesImplementations);
    }

    fetchService<T>(name: string): T {
        if(!this._dependencies[name]) {
            throw new Error(`Unresolved dependency ${name}`);
        }
        return this._dependencies[name] as T;
    }

    private getDependenciesImplementations(names: string[]): Object[] {
        return names.map(name => this.fetchService(name))
    }
}