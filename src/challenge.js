module.exports = {
    companies
};

function companies(data) {

    var companies = data.companies.map(function(comps) {

        var results = {
            name: comps.name,
            employees: [],
        };

        var people = data.people.map(function(peeps) {

            if (peeps.employments.length !== 0) {
                peeps.employments.forEach(function(employment) {
                    if (employment.company_id === comps.id) {
                        var person = {
                            id: peeps.id,
                            first_name: peeps.first_name,
                            last_name: peeps.last_name,
                            title: employment.title
                        }

                        results.employees.push(person);
                    }
                });
            }

        });

        return results;
    });

    console.log(JSON.stringify(companies, null, 2));
    return companies;
}
