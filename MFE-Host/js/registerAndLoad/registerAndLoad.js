 function registerAndLoad(dependencies = [], bundle) {

    let loadingPromises = [];

    function loadApp(url, success, error) {

        function defaultResolve() {
            // handle onload
        }

        function defaultReject() {
            // handle onerror
            console.log("got here!", this.src);
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.src = url;
            script.id = 'script-module';
            script.onload = defaultResolve;
            script.onerror = defaultReject;
            script.textContent = 'alert(1)';
            document.head.appendChild(script)
        });
    }

    async function registerAndLoad(dependencies, bundle, success, error) {
        dependencies.forEach((moduleUrl) => {
            loadingPromises.push(
                loadApp(moduleUrl, success, error)
            );
        });
        Promise.all(dependencies)
        .then(function(results) {
            // each result has a .value and a corresponding .source property
            loadApp(bundle);
        })    
        .catch(function () {
            console.log("Promise Rejected");
        });
    
    }

    registerAndLoad(dependencies, bundle);

}