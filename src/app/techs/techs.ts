class Tech {
  constructor(
    public logo: string,
    public title: string,
    public text1: string,
    public text2: string
  ) {}
}


class TechsController {
  public techs: Tech[];

  /** @ngInject */
  constructor(private $http: angular.IHttpService) {
    $http
      .get('app/techs/techs.json')
      .then(response => {
        this.techs = response.data as Tech[];
      });
  }
}

export const techs = {
  templateUrl: 'app/techs/techs.html',
  controller: TechsController
};
